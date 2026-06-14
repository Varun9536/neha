import styles from "./Footer.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>NS.</div>
            <div className={styles.tagline}>HR Recruiter - India</div>
          </div>
          <nav className={styles.nav}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className={styles.navLink}>{l.label}</a>
            ))}
          </nav>
          <a href="mailto:ns291999@gmail.com" className={styles.cta}>
            Let&apos;s Talk -&gt;
          </a>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>(c) {new Date().getFullYear()} Neha Singh. All rights reserved.</span>
          <span className={styles.built}>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
