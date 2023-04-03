import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/actions/filter";

const Filter = () => {
  const dispatch = useDispatch();

  const completeTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.isCompleted === false)
  );
  const filterBy = useSelector((state) => state.filter.filterBy);

  const changeFilterHandler = (e) => {
    e.preventDefault();
    const data = { filterBy: e.target.value };
    dispatch(changeFilter(data));
  };

  return (
    <>
      <Container maxWidth="sm">
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography>{completeTodos.length} task are remaining..</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Filter By</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Filter By"
              value={filterBy}
              onChange={changeFilterHandler}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Container>
    </>
  );
};

export default Filter;
