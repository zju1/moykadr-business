import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../../entities/User";

interface IAuthSlice {
  user: User | null;
}

const initialState: IAuthSlice = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setUser } = authSlice.actions;
