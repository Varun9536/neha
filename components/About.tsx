import styles from "./About.module.css";

const cards = [
  { icon: "IN", label: "Location", value: "Ghaziabad, Uttar Pradesh" },
  { icon: "HR", label: "Company", value: "Eice Technology Pvt. Ltd." },
  { icon: "TA", label: "Speciality", value: "IT Recruitment" },
  { icon: "AI", label: "Focus", value: "AI-assisted Talent Acquisition" },
  { icon: "ATS", label: "Tools", value: "HR One, SAP, HRIS" },
  { icon: "CX", label: "Strength", value: "Candidate Experience" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          About Me
        </div>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              I connect talent<br />
              <span className={styles.grad}>with teams.</span>
            </h2>
            <div className={styles.body}>
              <p>
                I&apos;m <strong>Neha Singh</strong>, an MBA Human Resources graduate
                with hands-on experience in end-to-end recruitment, HR operations,
                and employee engagement within IT services organisations.
              </p>
              <p>
                I source, screen, and pipeline candidates across{" "}
                <strong>Naukri, LinkedIn, Indeed, and Internshala</strong>, while
                coordinating interviews, maintaining ATS records, preparing offer
                documentation, and sharing recruitment progress reports.
              </p>
              <p>
                My approach is structured, responsive, and candidate-focused. I am
                open for full-time{" "}
                <strong>HR Executive, HR Operations, or Talent Acquisition</strong>{" "}
                role where I can support efficient hiring, AI-assisted sourcing,
                and people operations.
              </p>
            </div>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              <div>
                <div className={styles.statusRole}>HR Recruiter</div>
                <div className={styles.statusCompany}>Eice Technology Pvt. Ltd. - March 2026 to Present</div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cardGrid}>
              {cards.map((c) => (
                <div key={c.label} className={styles.card}>
                  <div className={styles.cardIcon}>{c.icon}</div>
                  <div className={styles.cardLabel}>{c.label}</div>
                  <div className={styles.cardValue}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
