import styles from "./Contact.module.css";

const links = [
  { icon: "@", type: "Email", value: "ns291999@gmail.com", sub: "Best way to reach me", href: "mailto:ns291999@gmail.com" },
  { icon: "in", type: "LinkedIn", value: "linkedin.com/in/nehas29", sub: "Professional network", href: "https://linkedin.com/in/nehas29" },
  { icon: "CV", type: "Resume", value: "Download resume", sub: "PDF profile", href: "/Neha_Singh_HR_Resume.pdf" },
];

const availability = [
  { label: "HR Recruiter Roles", available: true },
  { label: "HR Generalist Roles", available: true },
  { label: "Full-time Roles", available: true },
  { label: "Remote Work", available: true },
  { label: "Onsite (India)", available: true },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Get In Touch
        </div>

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Let&apos;s discuss<br />
              <span className={styles.grad}>HR roles</span><br />
              <span className={styles.dim}>and hiring.</span>
            </h2>
            <p className={styles.sub}>
              Open to HR Recruiter, HR Generalist, and people operations opportunities.
              I respond within <strong>24 hours.</strong>
            </p>

            <div className={styles.avail}>
              <div className={styles.availLabel}>// Open for</div>
              {availability.map((a) => (
                <div key={a.label} className={styles.availItem}>
                  <span className={a.available ? styles.availDot : styles.availDotNo} />
                  <span className={styles.availText}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.links}>
              {links.map((l) => (
                <a
                  key={l.type}
                  href={l.href}
                  target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <div className={styles.linkBar} />
                  <div className={styles.linkIcon}>{l.icon}</div>
                  <div className={styles.linkBody}>
                    <div className={styles.linkType}>{l.type}</div>
                    <div className={styles.linkVal}>{l.value}</div>
                    <div className={styles.linkSub}>{l.sub}</div>
                  </div>
                  <span className={styles.linkArrow}>-&gt;</span>
                </a>
              ))}
            </div>

            <div className={styles.emailBox}>
              <div className={styles.emailLabel}>// or just drop a quick email</div>
              <a href="mailto:ns291999@gmail.com" className={styles.emailBtn}>
                Send Email -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
