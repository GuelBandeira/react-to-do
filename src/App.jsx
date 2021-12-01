import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Componentes
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

//Estilos
import "./App.css";
import TaskDetails from "./components/TaskDetails";

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
    const novaTarefa = tasks.filter((task) => task.id !== taskId);

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
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask adicionarTask={adicionarTask} />
              <Tasks
                tasks={tasks}
                deletarTask={deletarTask}
                adicionarTask={adicionarTask}
                completarTask={completarTask}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;
