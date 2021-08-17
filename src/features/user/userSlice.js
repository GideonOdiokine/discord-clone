import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setUserLoginDetails } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export default userSlice.reducer;
