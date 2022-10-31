import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorType {
  message: string;
}

type UserType = {
  name: string;
};

type InitialState = {
  isLoading: boolean;
  user: {} | UserType;
  error: string;
};

const initialState: InitialState = {
  isLoading: false,
  user: {},
  error: "",
};

export const login = createAsyncThunk<
  UserType,
  {
    email: string;
    password: string;
  },
  { rejectValue: ErrorType }
>("user/login", async (_user, thunkApi) => {
  const url = process.env.REACT_APP_API || "";
  const response = await fetch(url);
  if (response.status === 404)
    return thunkApi.rejectWithValue((await response.json()) as ErrorType);
  return (await response.json()) as UserType;
});

const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserType | ErrorType>) => {
        state.isLoading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) state.error = action.payload.message;
    });
  },
});

export default userStore.reducer;
