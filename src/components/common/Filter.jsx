import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/warehouse/warehouseSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className="filter">
      <label>
        City:
        <input type="text" name="city" onChange={handleFilterChange} />
      </label>
      <label>
        Cluster:
        <input type="text" name="cluster" onChange={handleFilterChange} />
      </label>
      <label>
        Space Available:
        <input type="number" name="spaceAvailable" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
