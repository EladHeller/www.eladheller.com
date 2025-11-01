interface SkillTagsProps {
  skills: string[];
}

export const SkillTags = ({ skills }: SkillTagsProps) => (
  <div>
    <h2 className="text-xl font-bold text-white print:text-black mb-2">Core Technologies</h2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-blue-900 print:bg-blue-100 text-blue-300 print:text-blue-900 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

