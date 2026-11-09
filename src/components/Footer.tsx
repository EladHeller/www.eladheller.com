export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-content">
        <span>אלעד הלר <span className="footer-year">/ {new Date().getFullYear()}</span></span>
        <div><a href="https://github.com/EladHeller">GitHub</a><a href="https://www.linkedin.com/in/elad-heller-67717672/">LinkedIn</a><a href="https://github.com/EladHeller/www.eladheller.com">הקוד של האתר</a></div>
      </div>
    </footer>
  );
}
