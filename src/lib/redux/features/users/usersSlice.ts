import usersAPI from "@/lib/axios/usersAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getUsers = createAsyncThunk("users/data", async () => {
  try {
    const response = await usersAPI("/users");
    const data = response.data;
    console.log("USERS: ", data);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error("ERROR: ", error.response?.data || error?.message);
    }
  }
});

const initialState: InitialUsers = {
  isLoading: true,
  error: null,
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectUserLoading = (state: RootStateUsers) => state.users.isLoading;
export const selectUserError = (state: RootStateUsers) => state.users.error;
export const selectUsersData = (state: RootStateUsers) => state.users.users;

export default usersSlice.reducer