import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ adicionarTask }) => {
  const [inputData, setInputData] = useState("");

  const trocarInput = (e) => {
    setInputData(e.target.value);
  };

  const handleInputChange = () => {
    if (inputData !== "") {
      adicionarTask(inputData);
      setInputData("");
    }
  };

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={trocarInput}
          value={inputData}
          className="add-task-input"
          type="text"
        />
        <div className="add-task-button-container">
          <Button onClick={handleInputChange}>Adicionar</Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
