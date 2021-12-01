import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

const Task = ({ task, completarTask, deletarTask }) => {
  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <>
      <div
        className="task-container"
        style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      >
        <div className="task-title" onClick={() => completarTask(task.id)}>
          {task.title}
        </div>

        <div className="buttons-container">
          <button
            className="remove-task-button"
            onClick={() => deletarTask(task.id)}
          >
            <CgClose />
          </button>
          <button
            className="see-details-task-button"
            onClick={handleDetailsClick}
          >
            <CgInfo />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
