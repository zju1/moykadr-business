import { createSlice } from "@reduxjs/toolkit";

export type SidebarState = "expand" | "collapse";

interface IUISlice {
  sidebarOpen: boolean;
}

const initialState: IUISlice = {
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    resetUi: () => initialState,
  },
});

export default uiSlice.reducer;

export const { resetUi } = uiSlice.actions;
