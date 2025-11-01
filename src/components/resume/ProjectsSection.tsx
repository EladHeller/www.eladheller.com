import { ProjectItem } from './ProjectItem';

interface Project {
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Wikipedia Update Bot',
    description: 'Updating financial data, maintaining templates, and enforcing Wikipedia policies.',
    technologies: 'TypeScript, Node.js, Docker, AWS Cloudformation, AWS Lambda',
    githubUrl: 'https://github.com/EladHeller/wiki-bot',
  },
  {
    title: 'Writers Survey Website',
    description: 'Platform for managing Ministry of Culture grants for writers',
    technologies: 'AWS Lambda, AWS DynamoDB, AWS CloudFront',
    githubUrl: 'https://github.com/EladHeller/seker-sofrim',
  },
  {
    title: 'Passkol',
    description: 'Platform for selling song usage rights',
    technologies: 'MSSQL, Entity Framework, AngularJS',
    githubUrl: 'https://github.com/EladHeller/passkol',
  },
  {
    title: 'Israel election results',
    description: 'Israel election results in real time.',
    technologies: 'Node.js, Typescript, AWS Lambda, AWS Cloudformation',
    githubUrl: 'https://github.com/EladHeller/israel-elections',
  },
];

export const ProjectsSection = () => (
  <div>
    <h2 className="text-xl font-bold text-white print:text-black mb-4">Selected Side Projects</h2>
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  </div>
);

