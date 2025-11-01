import { WorkExperienceItem } from './WorkExperienceItem';

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: 'Wix.com',
    position: 'Senior Backend Engineer',
    period: 'Jul 2025 - Present',
    responsibilities: ['Developing backend services and solutions using Scala.'],
    technologies: 'Scala',
  },
  {
    company: 'Applitools',
    position: 'Senior Full Stack Developer',
    period: 'Feb 2023 - Mar 2025',
    responsibilities: [
      'Developing and maintaining complex web applications for visual testing automation.',
      'Implementing scalable and high-performance back-end services using Node.js and TypeScript.',
      'Integrating front-end solutions with React.js and optimizing UI performance.',
      'Collaborating with cross-functional teams to enhance product capabilities.',
    ],
    technologies: 'React.js, Node.js, PostgreSQL, Storybook',
  },
  {
    company: 'Joyned',
    position: 'Senior Full Stack Developer',
    period: 'Sep 2019 - Jan 2023',
    responsibilities: [
      'Led front-end development for a major product, designing and implementing UI solutions.',
      'Architected third-party plugin integration and optimized API performance.',
      'Mentored junior developers and drove best coding practices.',
    ],
    technologies: 'React.js, Node.js, AWS, MongoDB, GitHub Catalyst',
  },
  {
    company: 'WellDone Software Solutions',
    position: 'Full Stack Developer',
    period: 'Dec 2017 - Sep 2019',
    responsibilities: [
      'Designed and developed scalable microservices architecture.',
      'Delivered end-to-end solutions for enterprise applications.',
    ],
    technologies: 'Node.js, React.js, Typescript, AWS, RabbitMQ, PostgreSQL, Docker',
  },
  {
    company: 'Unit 8200 - Israeli Intelligence Corps',
    position: 'Full Stack Developer',
    period: 'Mar 2014 - Dec 2017',
    responsibilities: [
      'Led large-scale projects in microservices architecture.',
      'Developed and optimized web applications from scratch.',
    ],
    technologies: 'Node.js, Angular, MongoDB, OpenShift, Oracle SQL, MVC.NET',
  },
];

export const WorkExperienceSection = () => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-white print:text-black mb-4">Work Experience</h2>
    <div className="space-y-6">
      {workExperiences.map((experience) => (
        <WorkExperienceItem key={experience.company} {...experience} />
      ))}
    </div>
  </div>
);

