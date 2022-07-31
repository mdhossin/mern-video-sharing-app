import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = "";
      state.user = action.payload;
    },

    loginFailed: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },

    logoutUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = "";
    },
  },
});

export const { loginFailed, loginStart, loginSuccess, logoutUser } =
  userSlice.actions;

export default userSlice.reducer;
