import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogPost from '@/components/BlogPost';
import { Pre, Code, Heading2, Link } from '@/components/mdx';

interface Frontmatter {
  title: string;
  date: string;
  description?: string;
}

const components = {
  pre: Pre,
  code: Code,
  h2: Heading2,
  a: Link,
};

// Correct typing provided directly by Next.js docs
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'src/content/posts', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  return (
    <BlogPost frontmatter={frontmatter}>
      <MDXRemote source={content} components={components} />
    </BlogPost>
  );
}

// generateStaticParams() should return params exactly as Next.js expects
export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}
