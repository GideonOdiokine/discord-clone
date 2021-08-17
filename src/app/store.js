import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import newsSliceReducer from "../features/news/newsSlice";

export default configureStore({
  reducer: {
    news: newsSliceReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
