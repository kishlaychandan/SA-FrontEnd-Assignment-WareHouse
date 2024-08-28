import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './warehouse/warehouseSlice';

const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});

export default store;
