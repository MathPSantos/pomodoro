import styles from "./styles.module.scss";

interface SessionButtonProps {
  active?: boolean;
  label: string;
}

export function SessionButton({ active = false, label }: SessionButtonProps) {
  return (
    <button
      type="button"
      className={
        active
          ? `${styles.subscriptionButton} ${styles.active}`
          : styles.subscriptionButton
      }
    >
      {label}
    </button>
  );
}
