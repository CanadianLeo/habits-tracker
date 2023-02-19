import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { habitsReducer } from "./reducers/habitsReducer";

export const store = configureStore({reducer: habitsReducer, middleware: [thunk]});

export type AppDispatch = typeof store.dispatch