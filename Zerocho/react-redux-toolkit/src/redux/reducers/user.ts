import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "@/redux/actions/user";

const initialState: { data: null | any; isLoggingIn: boolean } = {
  data: null,
  isLoggingIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //동기
    logOut: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state, action) => {
      state.isLoggingIn = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoggingIn = false;
      state.data = action.payload;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoggingIn = false;
    });
  },
});

export default userSlice;
