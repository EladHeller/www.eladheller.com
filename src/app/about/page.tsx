"use client";
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">אודות</h1>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-xl text-gray-300 leading-relaxed">
            שלום, אני אלעד הלר, מתכנת בקאנד ב-Wix.com. כאן אני משתף את המחשבות והתובנות שלי בנושאי תכנות, טכנולוגיה, ופיתוח תוכנה ובעיקר מסדר את המחשבות שלי
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-6">
            <Link 
              href="/resume" 
              className={`text-blue-300 hover:text-blue-400 transition-colors`}
            >
              קורות החיים שלי
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
} 