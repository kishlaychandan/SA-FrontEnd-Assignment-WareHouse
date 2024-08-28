import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './Warehouse/warehouseSlice';

const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});

export default store;
