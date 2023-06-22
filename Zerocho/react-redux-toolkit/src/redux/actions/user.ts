import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = <T>(time: number, value: T): Promise<{ data: T }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: value });
    }, time);
  });

const logIn = createAsyncThunk("user/logIn", async (data: any, thunkApi) => {
  const response = await delay(500, data);

  return response.data;
});

export { logIn };
