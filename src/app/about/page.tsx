import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'אודות' };

export default function About() {
  return (
    <div className="site-width about-page">
      <p className="eyebrow">קצת עליי</p>
      <h1>שלום, אני אלעד.</h1>
      <p className="about-intro">מפתח בקאנד ב־Wix, עם רקע בפיתוח פולסטאק ואהבה לפרויקטים שמתחילים בשאלה.</p>
      <p>לפעמים השאלה היא מה היה קורה לתוצאות הבחירות אם כמה קולות היו עוברים לרשימה אחרת. לפעמים זו משימה בוויקיפדיה שאפשר לחסוך למישהו, ולפעמים זו פשוט סקרנות לראות רשת עצבית לומדת.</p>
      <p>באתר הזה ריכזתי כמה מהדברים שבניתי, ולצדם סיפורים על בעיות מעניינות שפגשתי בפיתוח.</p>
      <div className="project-links"><Link className="text-link" href="/#projects">לפרויקטים <span aria-hidden="true">↗</span></Link><Link href="/resume">קורות חיים</Link><a href="mailto:blog@eladheller.com">יצירת קשר</a></div>
    </div>
  );
}
