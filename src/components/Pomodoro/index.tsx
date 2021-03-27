import { SessionButton } from "./SessionButton";
import { TargetTimeButton } from "./TargetTimeButton";

import styles from "./styles.module.scss";

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
