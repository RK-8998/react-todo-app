import { todoTypes } from "../actions/todos";

const initialState = [
  { id: 1, name: "My First Todo", isCompleted: true, date: "29/3/2023" },
  { id: 2, name: "My Second Todo", isCompleted: false, date: "29/3/2023" },
  { id: 3, name: "My Third Todo", isCompleted: false, date: "31/3/2023" },
  { id: 4, name: "My Fourth Todo", isCompleted: false, date: "30/3/2023" },
  { id: 5, name: "My Five Todo", isCompleted: false, date: "1/4/2023" },
];

const todoReducer = (state = initialState, actions) => {
  let newTodos;
  switch (actions.type) {
    case todoTypes.ADD_TODO:
      newTodos = state.concat(actions.payload);
      console.log(newTodos);
      return newTodos;

    case todoTypes.COMPLETED_TODO:
      newTodos = [...state];
      const index = state.findIndex((todo) => todo.id === actions.payload.id);
      newTodos[index].isCompleted = true;
      return newTodos;

    default:
      return state;
  }
};

export default todoReducer;
