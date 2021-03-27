import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

interface PomodoroContextData {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  startPomodoro: () => void;
  pausePomodoro: () => void;
  resetPomodoro: (time: number) => void;
}

interface PomodoroProviderProps {
  children: ReactNode;
}

const PomodoroContext = createContext<PomodoroContextData>(
  {} as PomodoroContextData
);

let pomodoroTimeout: NodeJS.Timeout;

export function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      pomodoroTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 100);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  function startPomodoro() {
    setIsActive(true);
  }

  function pausePomodoro() {
    clearTimeout(pomodoroTimeout);
    setIsActive(false);
  }

  function resetPomodoro(time: number) {
    clearTimeout(pomodoroTimeout);
    setIsActive(false);
    setTime(time);
    setHasFinished(false);
  }

  return (
    <PomodoroContext.Provider
      value={{
        time,
        isActive,
        hasFinished,
        startPomodoro,
        pausePomodoro,
        resetPomodoro,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  const context = useContext(PomodoroContext);

  return context;
}
