import { experience } from "@/lib/data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Experience
        </div>
        <h2 className={styles.heading}>
          Where I&apos;ve <span className={styles.grad}>Worked.</span>
        </h2>

        <div className={styles.timeline}>
          {experience.map((exp) => (
            <div key={exp.company} className={styles.entry}>
              <div className={styles.dotCol}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={styles.content}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <div className={styles.role}>{exp.role}</div>
                  </div>
                  <div className={styles.periodBadge}>
                    {exp.live && <span className={styles.liveDot} />}
                    {exp.period}
                  </div>
                </div>

                <p className={styles.desc}>{exp.desc}</p>

                <div className={styles.achievements}>
                  <div className={styles.achievLabel}>// Key Contributions</div>
                  {exp.achievements.map((a, i) => (
                    <div key={i} className={styles.achievement}>
                      <span className={styles.achievIcon}>-</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
