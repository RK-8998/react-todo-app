import React, { useCallback, useEffect, useState } from "react";
import Todo from "../components/Todo";
import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { filterBy } = useSelector((state) => state.filter);

  const data = useSelector((state) => state.todos);
  const [todos, setTodos] = useState([]);

  const filterTodo = useCallback(() => {
    let tempTodos;
    if (filterBy === "All") {
      tempTodos = data;
    } else if (filterBy === "Active") {
      tempTodos = data.filter((todo) => todo.isCompleted === false);
    } else if (filterBy === "Completed") {
      tempTodos = data.filter((todo) => todo.isCompleted === true);
    }
    setTodos(tempTodos);
  }, [data, filterBy]);

  useEffect(() => {
    filterTodo();
  }, [filterTodo]);

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            height: 350,
            overflow: "hidden",
            overflowY: "scroll",
            paddingRight: "18px",
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                isCompleted={todo.isCompleted}
                date={todo.date}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default TodoList;
