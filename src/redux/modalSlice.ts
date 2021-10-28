import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  isOpen: boolean;
  isError: boolean;
}

const initialState: modalState = {
  isOpen: false,
  isError: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setOpen, setError } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
