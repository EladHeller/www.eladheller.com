import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
  };
}

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        frontmatter: data as Post['frontmatter'],
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">הבלוג שלי</h1>
          <p className="text-xl text-gray-300">
            ברוכים הבאים לבלוג שלי, כאן אני כותב על תכנות, טכנולוגיה וכל מה שמעניין אותי.
          </p>
        </div>
        
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">פוסטים אחרונים</h2>
          <div className="space-y-8">
            {posts.map(post => (
              <article key={post.slug} className="bg-gray-800 rounded-lg p-8 shadow-lg hover:bg-gray-750 transition-colors">
                <time className="text-sm text-gray-400 mb-2 block">
                  {new Date(post.frontmatter.date).toLocaleDateString('he-IL')}
                </time>
                <h3 className="text-2xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="text-white hover:text-blue-400 transition-colors">
                    {post.frontmatter.title}
                  </Link>
                </h3>
                {post.frontmatter.description && (
                  <p className="text-gray-300 text-lg">{post.frontmatter.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
