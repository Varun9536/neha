import styles from "./Marquee.module.css";

const items = [
  "End-to-End Recruitment",
  "Naukri.com",
  "LinkedIn Recruiter",
  "Indeed",
  "Internshala",
  "HR One ATS",
  "SAP",
  "HRIS",
  "Onboarding",
  "Offer Letters",
  "Interview Coordination",
  "Recruitment Reporting",
  "Employee Engagement",
  "MS Excel",
  "Google Workspace",
  "Canva",
];

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
