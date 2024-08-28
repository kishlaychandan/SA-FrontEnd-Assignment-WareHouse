import { createSlice } from '@reduxjs/toolkit';
import warehousesData from '../../assets/warehouses.json';

const initialState = {
  warehouses: warehousesData,
  filters: {
    city: '',
    cluster: '',
    spaceAvailable: null,
  },
  status: 'idle',
};

const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {
    setWarehouses: (state, action) => {
      state.warehouses = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    updateWarehouse: (state, action) => {
      const { id, updatedData } = action.payload;
      state.warehouses = state.warehouses.map(warehouse =>
        warehouse.id === id ? { ...warehouse, ...updatedData } : warehouse
      );
    },
  },
});

export const { setWarehouses, setFilters, updateWarehouse } = warehouseSlice.actions;
export default warehouseSlice.reducer;
