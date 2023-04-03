import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { completedTodo } from "../redux/actions/todos";
import { useDispatch } from "react-redux";

const Todo = ({ id, name, isCompleted, date }) => {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  const todoHandler = (e) => {
    const temp =
      window.confirm("Are you sure? to Complete todo...") &&
      e.target.checked === true;
    setConfirm(temp);
    if (temp) {
      dispatch(completedTodo(id));
    }
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#dfe6e9",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
          padding: "12px",
          margin: "12px 0",
          gap: 3,
        }}
      >
        <Stack direction={"row"} gap={2}>
          <input
            type="checkbox"
            name="chk"
            checked={confirm}
            onChange={todoHandler}
            style={{ width: "18px", height: "18px" }}
            disabled={isCompleted}
          />
          <Typography
            sx={isCompleted ? { textDecoration: "line-through" } : {}}
          >
            {name}
          </Typography>
        </Stack>

        <Typography>{date}</Typography>
      </Stack>
    </>
  );
};

export default Todo;
