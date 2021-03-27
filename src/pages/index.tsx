import Head from "next/head";

import { Pomodoro } from "../components/Pomodoro";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomoo</title>
      </Head>

      <main>
        <div className={styles.homeContent}>
          <Pomodoro />
        </div>
      </main>
    </>
  );
}
