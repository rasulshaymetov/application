import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:'gay'
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLoader = action.payload;
    },
  },
});
export const selectLogin = (state) => state.login;
export default loginSlice.reducer;
