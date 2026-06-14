import { skills } from "@/lib/data";
import styles from "./Skills.module.css";

const categories = [
  { key: "languages" as const, label: "Recruitment", icon: "TA" },
  { key: "frontend" as const, label: "HR Operations", icon: "OP" },
  { key: "backend" as const, label: "Tools", icon: "ATS" },
  { key: "databases" as const, label: "Reporting", icon: "RP" },
  { key: "devops" as const, label: "Professional", icon: "CX" },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            HR Skills
          </div>
          <h2 className={styles.heading}>
            My <span className={styles.grad}>Strengths.</span>
          </h2>
          <p className={styles.sub}>Recruitment, HR operations, reporting, and candidate communication capabilities.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.key} className={styles.col}>
              <div className={styles.colHead}>
                <span className={styles.colIcon}>{cat.icon}</span>
                <span className={styles.colLabel}>{cat.label}</span>
              </div>
              <div className={styles.skillList}>
                {skills[cat.key].map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.fill}
                        style={{ "--w": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pillsSection}>
          <div className={styles.pillsLabel}>// Also familiar with</div>
          <div className={styles.pills}>
            {["MS Office", "Google Workspace", "Zoom", "MS Teams", "Canva", "SAP", "HRIS", "Offer Letters", "Policy Updates", "Employee Records", "Fun Fridays", "Team Outings"].map((p) => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
