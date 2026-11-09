import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">דילוג לתוכן</a>
      <nav className="site-width navigation" aria-label="ניווט ראשי">
        <Link className="site-name" href="/">אלעד הלר<span aria-hidden="true">.</span></Link>
        <div className="nav-links"><Link href="/#projects">פרויקטים</Link><Link href="/#writing">כתיבה</Link><Link href="/about">אודות</Link></div>
        <a className="nav-github" href="https://github.com/EladHeller">GitHub <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
