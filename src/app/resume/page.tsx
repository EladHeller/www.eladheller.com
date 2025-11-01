'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaGlobe } from 'react-icons/fa';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import type { MouseEvent } from 'react';
import type { UseReactToPrintOptions } from 'react-to-print';

export default function Resume() {
  const componentRef = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV === 'development';
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Elad Heller - Resume',
    pageStyle: `
      @page { 
        size: A4; 
        margin: 2cm; 
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
      .print\\:bg-white {
        background-color: white;
      }
      .print\\:text-black {
        color: black;
      }
      .print\\:text-gray-700 {
        color: #4a5568;
      }
      .print\\:text-blue-700 {
        color: #2b6cb0;
      }
      .print\\:bg-blue-100 {
        background-color: #ebf8ff;
      }
      .print\\:text-blue-900 {
        color: #2a4365;
      }
    `,
  } as UseReactToPrintOptions);

  const onPrintClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handlePrint();
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900" dir="ltr">
      <main className="max-w-4xl mx-auto">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (isDev) {
              onPrintClick(e);
            } else {
              window.location.href = '/Elad_Heller_CV.pdf';
            }
          }}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <FaFilePdf />
          Export to PDF
        </button>
        <div ref={componentRef} className="bg-gray-800 rounded-lg p-6 shadow-lg print:bg-white print:text-black">
          {/* Header */}
          <h1 className="text-3xl font-bold text-white print:text-black mb-2">Elad Heller</h1>
          <p className="text-lg text-gray-300 print:text-gray-700 mb-6">Senior Software Engineer</p>

          {/* Contact & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white print:text-black mb-2">Contact</h2>
              <div className="space-y-2">
                <a href="https://linkedin.com/in/elad-heller-67717672" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors">
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/EladHeller" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors">
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a href="mailto:job@eladheller.com" className="flex items-center gap-2 text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors">
                  <FaEnvelope className="text-xl" />
                  <span>job@eladheller.com</span>
                </a>
                <a href="https://www.eladheller.com" className="flex items-center gap-2 text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors">
                  <FaGlobe className="text-xl" />
                  <span>Website</span>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white print:text-black mb-2">Core Technologies</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full">AWS Lambda</span>
                <span className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full">Scala</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white print:text-black mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Wix.com</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Senior Backend Engineer</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Jul 2025 - Present</p>
                <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Developing backend services and solutions using Scala.</li>
                </ul>
                <p className="text-gray-400 print:text-gray-500 text-sm">Scala</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Applitools</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Senior Full Stack Developer</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Feb 2023 - Mar 2025</p>
                <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Developing and maintaining complex web applications for visual testing automation.</li>
                  <li>Implementing scalable and high-performance back-end services using Node.js and TypeScript.</li>
                  <li>Integrating front-end solutions with React.js and optimizing UI performance.</li>
                  <li>Collaborating with cross-functional teams to enhance product capabilities.</li>
                </ul>
                <p className="text-gray-400 print:text-gray-500 text-sm">React.js, Node.js, PostgreSQL, Storybook</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Joyned</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Senior Full Stack Developer</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Sep 2019 - Jan 2023</p>
                <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Led front-end development for a major product, designing and implementing UI solutions.</li>
                  <li>Architected third-party plugin integration and optimized API performance.</li>
                  <li>Mentored junior developers and drove best coding practices.</li>
                </ul>
                <p className="text-gray-400 print:text-gray-500 text-sm">React.js, Node.js, AWS, MongoDB, GitHub Catalyst</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">WellDone Software Solutions</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Full Stack Developer</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Dec 2017 - Sep 2019</p>
                <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Designed and developed scalable microservices architecture.</li>
                  <li>Delivered end-to-end solutions for enterprise applications.</li>
                </ul>
                <p className="text-gray-400 print:text-gray-500 text-sm">Node.js, React.js, Typescript, AWS, RabbitMQ, PostgreSQL, Docker</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Unit 8200 - Israeli Intelligence Corps</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Full Stack Developer</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Mar 2014 - Dec 2017</p>
                <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Led large-scale projects in microservices architecture.</li>
                  <li>Developed and optimized web applications from scratch.</li>
                </ul>
                <p className="text-gray-400 print:text-gray-500 text-sm">Node.js, Angular, MongoDB, OpenShift, Oracle SQL, MVC.NET</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-bold text-white print:text-black mb-4">Selected Side Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Wikipedia Update Bot</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Updating financial data, maintaining templates, and enforcing Wikipedia policies.</p>
                <p className="text-sm text-gray-400 print:text-gray-500">TypeScript, Node.js, Docker, AWS Cloudformation, AWS Lambda</p>
                <a href="https://github.com/EladHeller/wiki-bot" target="_blank" rel="noopener noreferrer" className="text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-2">
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Writers Survey Website</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Platform for managing Ministry of Culture grants for writers</p>
                <p className="text-sm text-gray-400 print:text-gray-500">AWS Lambda, AWS DynamoDB, AWS CloudFront</p>
                <a href="https://github.com/EladHeller/seker-sofrim" target="_blank" rel="noopener noreferrer" className="text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-2">
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Passkol</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Platform for selling song usage rights</p>
                <p className="text-sm text-gray-400 print:text-gray-500">MSSQL, Entity Framework, AngularJS</p>
                <a href="https://github.com/EladHeller/passkol" target="_blank" rel="noopener noreferrer" className="text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-2">
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white print:text-black">Israel election results</h3>
                <p className="text-base text-gray-300 print:text-gray-700">Israel election results in real time.</p>
                <p className="text-sm text-gray-400 print:text-gray-500">Node.js, Typescript, AWS Lambda, AWS Cloudformation</p>
                <a href="https://github.com/EladHeller/israel-elections" target="_blank" rel="noopener noreferrer" className="text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-2">
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}