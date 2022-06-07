import { get } from "../../api/server";
import { CATEGORIES, DATA } from "./types";

export const get_all_categories = () => (dispatch) => {
  get("", (response) => {
    dispatch({
      type: CATEGORIES,
      payload: Object.keys(response),
    });
  });
};
export const get_data_by_search = (category, query) => (dispatch) => {
  get(query ? `${category}/?search=${query}` : `${category}`, (response) => {
    dispatch({
      type: DATA,
      payload: response.results,
    });
  });
};
