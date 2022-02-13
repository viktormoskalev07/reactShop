import {configureStore} from '@reduxjs/toolkit';

import basketReducer from '../fetures/basket/basket-slice';


export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
