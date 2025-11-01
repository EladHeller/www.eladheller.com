import { FaGithub } from 'react-icons/fa';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
}

export const ProjectItem = ({ title, description, technologies, githubUrl }: ProjectItemProps) => (
  <div>
    <h3 className="text-lg font-bold text-white print:text-black">{title}</h3>
    <p className="text-base text-gray-300 print:text-gray-700">{description}</p>
    <p className="text-sm text-gray-400 print:text-gray-500">{technologies}</p>
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors inline-flex items-center gap-2 mt-2"
    >
      <FaGithub />
      <span>View Code</span>
    </a>
  </div>
);

