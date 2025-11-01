'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/EladHeller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/elad-heller-67717672/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:blog@eladheller.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition-colors text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          {new Date().getFullYear()} אלעד הלר • <a
            href="https://github.com/EladHeller/www.eladheller.com"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="Source code"
            target="_blank"
          >
            לקוד המקור
          </a>
        </p>
      </div>
    </footer>
  );
}