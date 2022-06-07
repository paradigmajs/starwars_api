import { combineReducers } from "redux";
import { star_wars } from './sw_reducer';

export const rootReducer = combineReducers({
    star_wars,
})

