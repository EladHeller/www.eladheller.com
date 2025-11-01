import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

interface ContactLink {
  href: string;
  icon: typeof FaGithub;
  label: string;
}

const contacts: ContactLink[] = [
  {
    href: 'https://linkedin.com/in/elad-heller-67717672',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/EladHeller',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'mailto:job@eladheller.com',
    icon: FaEnvelope,
    label: 'job@eladheller.com',
  },
  {
    href: 'https://www.eladheller.com',
    icon: FaGlobe,
    label: 'Website',
  },
];

export const ContactLinks = () => (
  <div>
    <h2 className="text-xl font-bold text-white print:text-black mb-2">Contact</h2>
    <div className="space-y-2">
      {contacts.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-2 text-blue-300 print:text-blue-700 hover:text-blue-400 transition-colors"
        >
          <Icon className="text-xl" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  </div>
);

