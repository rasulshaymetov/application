import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:''
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsProfile(state, action) {
      state.isLoader = action.payload;
    },
  },
});
export const selectProfile = (state) => state.profile;
export const {setIsProfile} = profileSlice.actions;
export default profileSlice.reducer;
