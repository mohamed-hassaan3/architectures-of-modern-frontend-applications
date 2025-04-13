import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
export const RootReducer = combineReducers({
  users: usersReducer,
});
