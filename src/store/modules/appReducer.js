import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   isMobileMenuOpen: false,
};

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setMobileMenuOpen(state, action) {
         state.isMobileMenuOpen = action.payload;
      }
   },
   extraReducers: ( builder ) => {}
});

export const { 
   setMobileMenuOpen
} = appSlice.actions;
export default appSlice.reducer;