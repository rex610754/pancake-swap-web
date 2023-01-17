import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accountAddress: null
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      console.log('2 -------');
      state.accountAddress = action.payload;
    }
  }
});

export const { setAccount } = headerSlice.actions;
export const getAccount = (state) => {
  debugger;
  return state.header.accountAddress;
};

export default headerSlice.reducer;
