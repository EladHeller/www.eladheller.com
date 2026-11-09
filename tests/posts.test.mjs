import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { getPosts } from '../src/lib/posts.ts';

function withPosts(files, check) {
  const directory = mkdtempSync(path.join(tmpdir(), 'personal-site-posts-'));
  try {
    for (const [filename, content] of Object.entries(files)) {
      writeFileSync(path.join(directory, filename), content);
    }
    check(directory);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

const validPost = '---\ntitle: "A post"\ndate: "2025-11-10"\n---\nBody';

test('frontmatter cannot override either post link with an executable URL', () => {
  const content = validPost.replace('title:', 'slug: "javascript:alert(1)"\nhref: "javascript:alert(2)"\ntitle:');
  withPosts({ 'safe-post.mdx': content }, directory => {
    const [post] = getPosts(directory);
    assert.equal(post.slug, 'safe-post');
    assert.equal(post.href, '/blog/safe-post');
  });
});

test('only route-safe Markdown filenames become post links', () => {
  withPosts({
    'safe-post.mdx': validPost,
    'javascript:alert(1).mdx': validPost,
    'unsafe#fragment.mdx': validPost,
    'unsafe?query.mdx': validPost,
    'notes.txt': validPost,
  }, directory => {
    assert.deepEqual(getPosts(directory).map(post => post.href), ['/blog/safe-post']);
  });
});

test('valid post metadata is retained and sorted newest first', () => {
  withPosts({
    'older-post.mdx': validPost.replace('2025-11-10', '2025-03-11'),
    'newer-post.mdx': validPost.replace('title:', 'description: "A description"\ntitle:'),
  }, directory => {
    const posts = getPosts(directory);
    assert.deepEqual(posts.map(post => post.slug), ['newer-post', 'older-post']);
    assert.equal(posts[0].title, 'A post');
    assert.equal(posts[0].description, 'A description');
  });
});

test('invalid required metadata fails the build instead of rendering broken content', () => {
  withPosts({ 'invalid-post.mdx': validPost.replace('"2025-11-10"', '"not-a-date"') }, directory => {
    assert.throws(() => getPosts(directory), /Invalid title or date/);
  });
});
