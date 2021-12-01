import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const voltarPagina = () => {
    history.goBack();
  };

  console.log(params);

  return (
    <>
      <div className="back-button-container">
        <Button onClick={voltarPagina}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          molestias omnis praesentium neque, recusandae ex.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
