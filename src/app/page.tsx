import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
}

function getPosts(): Post[] {
  return fs.readdirSync(path.join(process.cwd(), 'src/content/posts'))
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const { data } = matter(fs.readFileSync(path.join(process.cwd(), 'src/content/posts', filename), 'utf8'));
      return { slug: filename.replace(/\.mdx$/, ''), ...data } as Post;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function ElectionVisual() {
  return (
    <div className="election-visual" aria-hidden="true">
      <div className="visual-caption"><span>בחירות בישראל</span><span>כנסת / יישוב / קלפי</span></div>
      <div className="ballot-mark">כנסת<br /><strong>120</strong></div>
      <div className="seat-bars">
        {[78, 60, 48, 39, 32, 27, 20, 14].map((height, index) => (
          <span key={height} style={{ height: `${height}%`, opacity: 1 - index * 0.08 }} />
        ))}
      </div>
      <div className="visual-caption visual-bottom"><span>תוצאות. תרחישים. השוואות.</span><span>↗</span></div>
    </div>
  );
}

function NetworkVisual() {
  const layers = [[32, 72, 112, 152], [52, 92, 132], [72, 112]];
  return (
    <svg className="network-visual" viewBox="0 0 340 184" fill="none" aria-hidden="true">
      {layers.slice(0, -1).flatMap((layer, layerIndex) => layer.flatMap(y => layers[layerIndex + 1].map(nextY => (
        <line key={`${layerIndex}-${y}-${nextY}`} x1={65 + layerIndex * 105} y1={y} x2={170 + layerIndex * 105} y2={nextY} stroke="currentColor" opacity="0.24" />
      ))))}
      {layers.flatMap((layer, layerIndex) => layer.map(y => (
        <circle key={`${layerIndex}-${y}`} cx={65 + layerIndex * 105} cy={y} r="7" fill="var(--surface)" stroke="currentColor" strokeWidth="2" />
      )))}
    </svg>
  );
}

export default function Home() {
  const posts = getPosts();
  return (
    <div className="home-page site-width">
      <section className="home-hero" aria-labelledby="intro-title">
        <p className="eyebrow">אלעד הלר / מפתח תוכנה</p>
        <h1 id="intro-title">סקרנות.<br />קוד. <span>דברים שעובדים.</span></h1>
        <div className="hero-bottom">
          <p>מפתח בקאנד ב־Wix. מחוץ לעבודה אני בונה כלים לניתוח נתונים, אוטומציות ודברים שעוזרים לי להבין איך דברים עובדים.</p>
          <a className="text-link" href="#projects">לפרויקטים <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section id="projects" className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">דברים שבניתי</h2><span className="section-note">פרויקטים נבחרים / 01—03</span></div>
        <article className="featured-project">
          <a className="project-art-link" href="https://elections.eladheller.com" aria-label="פתיחת אתר הבחירות"><ElectionVisual /></a>
          <div className="project-copy">
            <span className="project-number">01 / נתונים וכלים</span>
            <h3>בחירות בישראל</h3>
            <p className="project-lead">מה אפשר ללמוד מהקולות?</p>
            <p>תוצאות הבחירות עד לרמת היישוב והקלפי, השוואות בין מערכות בחירות וסימולטור לחלוקת מנדטים. מקום לבדוק גם שאלות של ״מה היה קורה אם״.</p>
            <div className="project-links"><a className="text-link" href="https://elections.eladheller.com">לפתיחת האתר <span aria-hidden="true">↗</span></a><a href="https://github.com/EladHeller/israel-elections">קוד המקור</a></div>
            <p className="tech-note" dir="ltr">TypeScript · React · AWS</p>
          </div>
        </article>
        <div className="project-pair">
          <article className="small-project">
            <div className="small-project-art wiki-visual" aria-hidden="true"><span className="wiki-letter">א</span><div><span>ויקיפדיה</span><p>עדכון נתונים<br />תחזוקה שוטפת<br />פחות עבודה ידנית</p></div></div>
            <span className="project-number">02 / אוטומציה</span>
            <h3>הבוטים לוויקיפדיה</h3>
            <p>משימות שחוזרות על עצמן הופכות לקוד: עדכון נתונים, תחזוקת תבניות ותיקון קישורים בוויקיפדיה העברית.</p>
            <div className="project-links"><a className="text-link" href="https://github.com/EladHeller/wiki-bot">לפרויקט ב־GitHub <span aria-hidden="true">↗</span></a></div>
            <p className="tech-note" dir="ltr">TypeScript · AWS Lambda</p>
          </article>
          <article className="small-project">
            <div className="small-project-art"><NetworkVisual /></div>
            <span className="project-number">03 / ניסוי אינטראקטיבי</span>
            <h3>לראות רשת עצבית לומדת</h3>
            <p>מציירים דוגמאות, נותנים להן שמות ומאמנים רשת עצבית בדפדפן. אפשר לראות את הקשרים והמשקלים משתנים בזמן הלמידה.</p>
            <div className="project-links"><a className="text-link" href="https://eladheller.github.io/visual-neural-network/">להתנסות <span aria-hidden="true">↗</span></a><a href="https://github.com/EladHeller/visual-neural-network">קוד המקור</a></div>
            <p className="tech-note" dir="ltr">React · TypeScript · Backpropagation</p>
          </article>
        </div>
      </section>

      <section id="writing" className="writing-section" aria-labelledby="writing-title">
        <div className="section-heading"><h2 id="writing-title">מדי פעם, גם כותב</h2><span className="section-note">בעיות שפגשתי בדרך</span></div>
        {posts.map(post => (
          <article key={post.slug} className="writing-row">
            <time dateTime={post.date}>{new Intl.DateTimeFormat('he-IL', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(post.date))}</time>
            <div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p></div>
            <Link className="writing-arrow" href={`/blog/${post.slug}`} aria-label={`לקריאה: ${post.title}`}>↖</Link>
          </article>
        ))}
      </section>
      <section className="contact-section" aria-labelledby="contact-title"><p className="eyebrow">נשארים בקשר</p><h2 id="contact-title">יש על מה לדבר.</h2><a className="text-link" href="mailto:blog@eladheller.com">שלחו לי מייל <span aria-hidden="true">↗</span></a></section>
    </div>
  );
}
