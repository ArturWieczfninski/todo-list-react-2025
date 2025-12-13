import { useState, useRef } from "react";
import {Button, Input, StyledForm} from "./styled";
import {useDispatch} from "react-redux";
import {addTask} from "../useTask";
import { nanoid } from "@reduxjs/toolkit";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispach = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }
    
    dispach(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));
    
    setNewTaskContent("");
    inputRef.current.focus();
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
    
export default Form;
