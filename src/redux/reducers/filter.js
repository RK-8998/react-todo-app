import { filterTypes } from "../actions/filter";

const initialState = { filterBy: "All" };

const filterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case filterTypes.CHANGE_FILTER:
      return { filterBy: actions.payload.filterBy };

    default:
      return state;
  }
};

export default filterReducer;
