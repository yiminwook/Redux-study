import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = <T>(time: number, value: T): Promise<{ data: T }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: value });
    }, time);
  });

const logIn = createAsyncThunk("user/logIn", async (data: any, thunkApi) => {
  try {
    // throw new Error("비밀번호가 잘못 되었습니다.");
    const response = await delay(500, data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export { logIn };
