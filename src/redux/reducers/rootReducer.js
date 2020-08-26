import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer
})