import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

//Componentes
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

//Estilos
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar",
      condicao: false,
    },
    {
      id: uuidv4(),
      title: "Gerar XML",
      condicao: true,
    },
  ]);

  const completarTask = (taskId) => {
    const novaTarefa = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(novaTarefa);
  };

  const deletarTask = (taskId) => {
    const novaTarefa = tasks.filter((task) => task.id != taskId);

    setTasks(novaTarefa);
  };

  const adicionarTask = (taskTitle) => {
    const novaTarefa = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        condicao: false,
      },
    ];
    setTasks(novaTarefa);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask adicionarTask={adicionarTask} />
        <Tasks
          tasks={tasks}
          deletarTask={deletarTask}
          adicionarTask={adicionarTask}
          completarTask={completarTask}
        />
      </div>
    </>
  );
}

export default App;
