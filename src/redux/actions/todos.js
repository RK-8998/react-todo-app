export const todoTypes = {
  ADD_TODO: "ADD_TODO",
  COMPLETED_TODO: "COMPLETE_TODO",
};

export const addTodo = (payload) => {
  return { type: todoTypes.ADD_TODO, payload };
};
export const completedTodo = (id) => {
  return { type: todoTypes.COMPLETED_TODO, payload: { id } };
};
