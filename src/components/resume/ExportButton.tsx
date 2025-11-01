import { FaFilePdf } from 'react-icons/fa';
import type { MouseEvent } from 'react';

interface ExportButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ExportButton = ({ onClick }: ExportButtonProps) => (
  <button
    onClick={onClick}
    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer"
  >
    <FaFilePdf />
    Export to PDF
  </button>
);

