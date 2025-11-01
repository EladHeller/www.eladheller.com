'use client';

import NextLink from 'next/link';
import { ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MDXCodeProps {
  children?: string;
  className?: string;
}

export const Pre = ({ children }: { children: ReactNode }) => {
  const [copied, setCopied] = useState(false);

  // Try to get the code and language from MDX structure
  let code = '';
  let language = 'typescript';

  const codeElement = children as { props: MDXCodeProps };
  if (codeElement?.props) {
    code = codeElement.props.children ?? '';
    if (codeElement.props.className) {
      const match = /language-(\w+)/.exec(codeElement.props.className);
      if (match) {
        language = match[1];
      }
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group my-8" dir="ltr">
      <button
        onClick={() => {
          void copyToClipboard();
        }}
        className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded px-2 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        {copied ? 'הועתק!' : 'העתק'}
      </button>
      <div className="rounded-lg overflow-hidden bg-[#1E1E1E] shadow-lg">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            background: 'transparent',
          }}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const Code = ({ children }: MDXCodeProps) => (
  <code className="bg-gray-800 rounded px-1.5 py-0.5 font-mono text-sm text-blue-300" dir="ltr">
    {children}
  </code>
);

export const Heading2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold mt-10 mb-6 text-white">
    {children}
  </h2>
);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const Link = ({ children, href, ...props }: LinkProps) => {
  // Use regular anchor for external links or anchor fragments
  if (!href || href.startsWith('http') || href.startsWith('#')) {
    return (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 transition-colors decoration-blue-400/30 hover:decoration-blue-300"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Use Next.js Link for internal navigation
  return (
    <NextLink
      href={href}
      className="text-blue-400 hover:text-blue-300 transition-colors decoration-blue-400/30 hover:decoration-blue-300"
      {...props}
    >
      {children}
    </NextLink>
  );
};