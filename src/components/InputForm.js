import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/actions/todos";

const InputForm = () => {
  const dispatch = useDispatch();
  const [enteredTodo, setEnteredTodo] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isInvalid = enteredTodo.trim().length === 0 && isTouched;

  console.log(isInvalid);
  const submitHandler = (e) => {
    e.preventDefault();

    setIsTouched(true);
    if (!isInvalid) {
      const newDate = new Date();
      const date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
      console.log(date);
      const data = {
        id: uuid(),
        name: enteredTodo,
        isCompleted: false,
        date: date,
      };
      dispatch(addTodo(data));
      setEnteredTodo("");
      setIsTouched(false);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Stack
          direction={"row"}
          gap={4}
          sx={{ alignmentBaseline: "center", justifyContent: "center" }}
        >
          <TextField
            label="Add new todo"
            placeholder="write your todo here.."
            variant="outlined"
            sx={{ width: "50%" }}
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
            onBlur={() => setIsTouched(true)}
            error={isInvalid}
          />
          <Button
            variant="outlined"
            type="submit"
            sx={{ borderRadius: "12px" }}
          >
            <AddIcon />
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default InputForm;
