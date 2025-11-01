interface ResumeHeaderProps {
  name: string;
  title: string;
}

export const ResumeHeader = ({ name, title }: ResumeHeaderProps) => (
  <>
    <h1 className="text-3xl font-bold text-white print:text-black mb-2">{name}</h1>
    <p className="text-lg text-gray-300 print:text-gray-700 mb-6">{title}</p>
  </>
);

