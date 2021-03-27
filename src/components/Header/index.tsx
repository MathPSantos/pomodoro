import { FiSettings, FiGithub } from "react-icons/fi";
import { DonateButton } from "./DonateButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />

        <nav>
          <FiSettings />

          <FiGithub />

          <DonateButton />
        </nav>
      </div>
    </header>
  );
}
