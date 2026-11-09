import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'אודות' };

export default function About() {
  return (
    <div className="site-width about-page">
      <p className="eyebrow">קצת עליי</p>
      <h1>שלום, אני אלעד.</h1>
      <p className="about-intro">אני מפתח בקאנד ב־Wix, ולפני כן עסקתי בפיתוח פולסטאק.</p>
      <p>בזמני הפנוי אני מפתח בין השאר אתר לניתוח תוצאות הבחירות ובוטים לוויקיפדיה העברית. כאן ריכזתי את הפרויקטים שלי וכמה פוסטים על העבודה עליהם.</p>
      <div className="project-links"><Link className="text-link" href="/#projects">לפרויקטים <span aria-hidden="true">↗</span></Link><Link href="/resume">קורות חיים</Link><a href="mailto:blog@eladheller.com">יצירת קשר</a></div>
    </div>
  );
}
