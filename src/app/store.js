import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/news/newsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
