import { CATEGORIES, DATA } from "../actions/types";

const initialState = {
  categories: [],
  data: [],
};

export const star_wars = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case DATA:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};
