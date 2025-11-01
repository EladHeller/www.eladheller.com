'use client';

import { ReactNode } from 'react';

interface BlogPostProps {
  children: ReactNode;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
}

export default function BlogPost({ children, frontmatter }: BlogPostProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <article className="prose prose-invert prose-lg max-w-4xl mx-auto" dir="rtl">
        <h1 className="text-4xl font-bold mb-4 text-white">{frontmatter.title}</h1>
        <div className="text-gray-400 mb-8">
          <time>{new Date(frontmatter.date).toLocaleDateString('he-IL')}</time>
        </div>
        {frontmatter.description && (
          <p className="text-xl text-gray-300 mb-8">{frontmatter.description}</p>
        )}
        <div className="prose prose-invert prose-pre:p-0 prose-pre:my-0 prose-pre:bg-transparent">
          {children}
        </div>
      </article>
    </div>
  );
}