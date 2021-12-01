import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, completarTask, deletarTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          completarTask={completarTask}
          deletarTask={deletarTask}
        />
      ))}
    </>
  );
};

export default Tasks;
