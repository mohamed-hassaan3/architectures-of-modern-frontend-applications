import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./rootReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: RootReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
