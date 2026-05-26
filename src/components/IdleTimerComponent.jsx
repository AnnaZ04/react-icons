import { useEffect } from "react";
import { toast } from "react-toastify";

export default function IdleTimerComponent() {
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        toast.warning("Ви неактивні 10 секунд!");
      }, 10000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  return <p>Система відстежує вашу активність</p>;
}