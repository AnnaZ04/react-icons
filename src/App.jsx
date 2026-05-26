import { useState, useMemo, useCallback } from "react";
import { FaPlus } from "react-icons/fa";

import IdleTimerComponent from "./components/IdleTimerComponent";
import TaskList from "./components/TaskList";
import ToastNotification from "./components/ToastNotification";


export default function App() {
  const [tasks, setTasks] = useState([
    "React",
    "useMemo",
    "Homework"
  ]);

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const addTask = useCallback(() => {
    if (input === "") {
      toast.error("Введіть задачу");
      return;
    }

    setTasks([...tasks, input]);
    setInput("");

    toast.success("Задача додана!");
  }, [input, tasks]);

  const filteredTasks = useMemo(() => {
    console.log("Фільтрація списку...");

    return tasks.filter((task) =>
      task.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>React Libraries Project</h1>

      <IdleTimerComponent />

      <input
        placeholder="Нова задача"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        <FaPlus /> Додати
      </button>

      <input
        placeholder="Пошук"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TaskList tasks={filteredTasks} />

      <ToastNotification />
    </div>
  );
}