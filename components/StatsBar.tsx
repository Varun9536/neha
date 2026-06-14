import { stats } from "@/lib/data";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.item}>
              <span className={styles.icon}>{s.icon}</span>
              <strong className={styles.value}>{s.value}</strong>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
