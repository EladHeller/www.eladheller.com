'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-4 mb-8 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex gap-6">
        <Link
          href="/"
          className={`text-lg ${pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'} transition-colors`}
        >
          דף הבית
        </Link>
        <Link
          href="/about"
          className={`text-lg ${pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'} transition-colors`}
        >
          אודות
        </Link>
      </div>
    </nav>
  );
}