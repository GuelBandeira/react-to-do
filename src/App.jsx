import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Estilos
import "./App.css";
import TaskDetails from "./components/TaskDetails";

//Componentes
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

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
