import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./employeeSlice";
import { modalReducer } from "./modalSlice";
import { effectsReducer } from "./effectsSlice";

export const store = configureStore({
  reducer: {
    employeesReducer,
    modalReducer,
    effectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
