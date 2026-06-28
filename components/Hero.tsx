import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for HR opportunities
          </div>

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>Neha</span>
            <span className={styles.nameLast}>Singh.</span>
          </h1>

          <div className={styles.roles}>
            <span className={styles.roleChip}>HR Recruiter</span>
            <span className={styles.roleChip}>HR Executive</span>
            <span className={styles.roleChip}>HR Operations</span>
            <span className={styles.roleChip}>Talent Acquisition</span>
            <span className={styles.roleChip}>MBA - Human Resources</span>
          </div>

          <p className={styles.bio}>
            I support <strong>end-to-end recruitment and people operations</strong>,
            from sourcing and screening to interview coordination, onboarding
            documentation, and recruitment reporting. Currently working with{" "}
            <strong>Eice Technology Pvt. Ltd.</strong>
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View Work <span>v</span>
            </a>
            <a href="#contact" className={styles.btnGlass}>
              Hire Me <span>-&gt;</span>
            </a>
            <a
              href="/Neha_Singh_Hr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGlass}
            >
              Resume <span>-&gt;</span>
            </a>
            <a
              href="https://linkedin.com/in/nehas29"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnIcon}
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:ns291999@gmail.com"
              className={styles.btnIcon}
              title="Email"
            >
              @
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardTitle}>// hr.profile</div>

          {[
            { label: "Status", value: "Available", type: "live" },
            { label: "Experience", value: "1+ year", type: "accent" },
            { label: "Current Role", value: "HR Recruiter", type: "normal" },
            { label: "Company", value: "Eice Technology", type: "normal" },
            { label: "Focus", value: "Recruitment + HR Ops", type: "accent" },
            { label: "Location", value: "Ghaziabad, India", type: "normal" },
            { label: "Screening", value: "200+ profiles/day", type: "normal" },
            { label: "Open to", value: "HR Executive / HR Ops / TA", type: "normal" },
          ].map((item) => (
            <div key={item.label} className={styles.stat}>
              <span className={styles.statLabel}>{item.label}</span>
              <span className={`${styles.statVal} ${item.type === "live" ? styles.live : item.type === "accent" ? styles.accent : ""}`}>
                {item.type === "live" && <span className={styles.liveDot} />}
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine}>
          <div className={styles.scrollThumb} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
