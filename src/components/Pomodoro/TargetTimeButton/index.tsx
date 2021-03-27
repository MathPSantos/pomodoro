import { usePomodoro } from "../../../hooks/usePomodoro";
import styles from "./styles.module.scss";

export function TargetTimeButton() {
  const { startPomodoro, isActive, pausePomodoro } = usePomodoro();

  return isActive ? (
    <button
      type="button"
      className={styles.targetTimeButton}
      onClick={pausePomodoro}
    >
      Stop
    </button>
  ) : (
    <button
      type="button"
      className={styles.targetTimeButton}
      onClick={startPomodoro}
    >
      Start
    </button>
  );
}
