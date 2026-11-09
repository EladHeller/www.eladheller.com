import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

interface Post {
  slug: string;
  href: string;
  title: string;
  date: string;
  description?: string;
}

export function getPosts(postsDirectory = path.join(process.cwd(), 'src/content/posts')): Post[] {
  return fs.readdirSync(postsDirectory)
    .filter(filename => /^[a-z0-9]+(?:-[a-z0-9]+)*\.mdx$/i.test(filename))
    .map(filename => {
      const { data } = matter(fs.readFileSync(path.join(postsDirectory, filename), 'utf8'));
      const metadata = data as Record<string, unknown>;
      if (typeof metadata.title !== 'string' || typeof metadata.date !== 'string' || Number.isNaN(Date.parse(metadata.date))) {
        throw new Error(`Invalid title or date in post: ${filename}`);
      }
      // Route identity comes only from the filename, never from frontmatter.
      const slug = filename.replace(/\.mdx$/i, '');
      return {
        slug,
        href: `/blog/${encodeURIComponent(slug)}`,
        title: metadata.title,
        date: metadata.date,
        description: typeof metadata.description === 'string' ? metadata.description : undefined,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
