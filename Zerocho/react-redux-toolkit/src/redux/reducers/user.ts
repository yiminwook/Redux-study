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
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoggingIn = false;
      state.data = action.payload;
    });
    builder.addMatcher(
      (action) => {
        return action.type.includes("/pending") === true;
      },
      (state) => {
        state.isLoggingIn = true;
      }
    );
    builder.addMatcher(
      (action) => {
        return action.type.includes("/rejected") === true;
      },
      (state) => {
        state.data = { name: "error" };
        state.isLoggingIn = false;
      }
    );
    builder.addDefaultCase((state, action) => {});
  },
});

export default userSlice;
