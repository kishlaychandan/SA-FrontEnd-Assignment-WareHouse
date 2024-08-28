import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WarehouseList from './components/WarehouseList/WarehouseList';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
      </Routes>
    </div>
  );
};

export default App;
