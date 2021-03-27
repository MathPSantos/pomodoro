import { SessionButton } from "./SessionButton";
import { TargetTimeButton } from "./TargetTimeButton";

import styles from "./styles.module.scss";
import { usePomodoro } from "../../hooks/usePomodoro";

export function Pomodoro() {
  const { time } = usePomodoro();

  return (
    <div className={styles.pomodoroWrapper}>
      <div>
        <SessionButton active label="Pomodoro" />

        <SessionButton label="Small break" />

        <SessionButton label="Long break" />
      </div>

      <span>{new Date(time * 1000).toISOString().substr(14, 5)}</span>

      <TargetTimeButton />
    </div>
  );
}
