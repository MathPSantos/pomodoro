import Head from "next/head";

import { PomodoroProvider } from "../hooks/usePomodoro";

import { Pomodoro } from "../components/Pomodoro";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomoo</title>
      </Head>

      <PomodoroProvider>
        <main>
          <div className={styles.homeContent}>
            <Pomodoro />
          </div>
        </main>
      </PomodoroProvider>
    </>
  );
}
