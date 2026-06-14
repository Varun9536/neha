"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>NS.</a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>
          Let&apos;s Talk <span>-&gt;</span>
        </a>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`${styles.bl} ${open ? styles.open : ""}`} />
          <span className={`${styles.bl} ${open ? styles.open : ""}`} />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className={styles.mlink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mcta} onClick={() => setOpen(false)}>
            Let&apos;s Talk -&gt;
          </a>
        </div>
      )}
    </nav>
  );
}
