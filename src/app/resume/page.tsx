'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import type { MouseEvent } from 'react';
import type { UseReactToPrintOptions } from 'react-to-print';
import { ResumeHeader } from '@/components/resume/ResumeHeader';
import { ContactLinks } from '@/components/resume/ContactLinks';
import { SkillTags } from '@/components/resume/SkillTags';
import { WorkExperienceSection } from '@/components/resume/WorkExperienceSection';
import { ProjectsSection } from '@/components/resume/ProjectsSection';
import { ExportButton } from '@/components/resume/ExportButton';

const CORE_SKILLS = ['Node.js', 'TypeScript', 'React', 'AWS Lambda', 'Scala'];

const PRINT_STYLES = `
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
`;

export default function Resume() {
  const componentRef = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV === 'development';

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Elad Heller - Resume',
    pageStyle: PRINT_STYLES,
  } as UseReactToPrintOptions);

  const onExportClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDev) {
      handlePrint();
    } else {
      window.location.href = '/Elad_Heller_CV.pdf';
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900" dir="ltr">
      <main className="max-w-4xl mx-auto">
        <ExportButton onClick={onExportClick} />
        <div ref={componentRef} className="bg-gray-800 rounded-lg p-6 shadow-lg print:bg-white print:text-black">
          <ResumeHeader name="Elad Heller" title="Senior Software Engineer" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ContactLinks />
            <SkillTags skills={CORE_SKILLS} />
          </div>

          <WorkExperienceSection />
          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}