import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  products: [],
};


const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
  },
});


export const {add} = basketSlice.actions;

export default basketSlice.reducer;
