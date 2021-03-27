import { SessionButton } from "./SessionButton";
import styles from "./styles.module.scss";
import { TargetTimeButton } from "./TargetTimeButton";

export function Pomodoro() {
  return (
    <div className={styles.pomodoroWrapper}>
      <div>
        <SessionButton active label="Pomodoro" />

        <SessionButton label="Small break" />

        <SessionButton label="Long break" />
      </div>

      <span>25:00</span>

      <TargetTimeButton />
    </div>
  );
}
