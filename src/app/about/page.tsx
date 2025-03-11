export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">אודות</h1>
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-xl text-gray-300 leading-relaxed">
            ברוכים הבאים לבלוג שלי! כאן אני משתף את המחשבות והתובנות שלי בנושאי תכנות, טכנולוגיה, ופיתוח תוכנה.
            פה בעיקר כדי לסדר את המחשבות שלי.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mt-6">
            כרגע אני בתהליך חיפוש עבודה, אפשר לראות ולהוריד את: <a href="/resume" className="text-blue-300 hover:text-blue-400 transition-colors">קורות החיים שלי באתר</a>.
          </p>
        </div>
      </main>
    </div>
  );
} 