import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface effectsState {
  isLoading: boolean;
  isEditing: boolean;
}

const initialState: effectsState = {
  isLoading: true,
  isEditing: false,
};

export const effectsSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = effectsSlice.actions;

export const effectsReducer = effectsSlice.reducer;
