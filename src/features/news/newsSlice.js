import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsAPI: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewArticle(state, action) {
      state.newsAPI.push(action.payload.newsAPI);
    },
  },
});

export const { setNewArticle } = newsSlice.actions;
export const selectNewsDetails = (state) => state.news.newsAPI;
export default newsSlice.reducer;
