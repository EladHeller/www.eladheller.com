import fs from 'fs';
import path from 'path';
import BlogPost from '@/components/BlogPost';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Pre, Code, Heading2 } from '@/components/mdx';

interface Frontmatter {
  title: string;
  date: string;
  description?: string;
}

const components = {
  pre: Pre,
  code: Code,
  h2: Heading2,
};

export default async function Post() {
  const filePath = path.join(process.cwd(), 'src/content/posts/first-post.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;

  return (
    <BlogPost frontmatter={frontmatter}>
      <MDXRemote source={content} components={components} />
    </BlogPost>
  );
} 