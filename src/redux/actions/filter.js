export const filterTypes = {
  CHANGE_FILTER: "CHANGE_FILTER",
};

export const changeFilter = (payload) => {
  return { type: filterTypes.CHANGE_FILTER, payload };
};
