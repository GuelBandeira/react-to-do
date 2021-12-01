import React from "react";
import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      condicao: false,
    },
    {
      id: 2,
      title: "Se matar",
      condicao: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
