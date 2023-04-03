import { Container, Typography } from "@mui/material";
import React from "react";
import InputForm from "../components/InputForm";
import TodoList from "./TodoList";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <>
      <Container sx={{ mt: 10, alignContent: "center" }}>
        <Typography variant="h3">THINGS TO DO</Typography>
        <br />
        <InputForm />
        <br />
        <TodoList />

        {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
        <br />
        <Filter />
      </Container>
    </>
  );
};

export default Home;
