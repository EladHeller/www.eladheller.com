interface WorkExperienceItemProps {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string;
}

export const WorkExperienceItem = ({
  company,
  position,
  period,
  responsibilities,
  technologies,
}: WorkExperienceItemProps) => (
  <div>
    <h3 className="text-lg font-bold text-white print:text-black">{company}</h3>
    <p className="text-base text-gray-300 print:text-gray-700">{position}</p>
    <p className="text-sm text-gray-400 print:text-gray-500">{period}</p>
    <ul className="list-disc list-inside text-sm text-gray-300 print:text-gray-700 mt-1 space-y-1">
      {responsibilities.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <p className="text-gray-400 print:text-gray-500 text-sm">{technologies}</p>
  </div>
);

