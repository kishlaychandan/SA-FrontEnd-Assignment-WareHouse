import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import warehouses from '../../assets/warehouses.json';
import './WarehouseList.css';

const WarehouseList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [clusterFilter, setClusterFilter] = useState('');
  const [spaceAvailableLimit, setSpaceAvailableLimit] = useState('');

  const filteredWarehouses = warehouses.filter((warehouse) => {
    return (
      (searchQuery === '' || warehouse.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (cityFilter === '' || warehouse.city === cityFilter) &&
      (clusterFilter === '' || warehouse.cluster === clusterFilter) &&
      (spaceAvailableLimit === '' || warehouse.space_available <= parseInt(spaceAvailableLimit, 10))
    );
  });

  const handleSelectWarehouse = (id) => {
    navigate(`/warehouse/${id}`);
  };

  return (
    <div className="warehouse-list-container">
      <input
        type="text"
        placeholder="Search by warehouse name..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="filters">
        <div className="filter">
          <label>City</label>
          <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Indore">Indore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Guwahati">Guwahati</option>
          </select>
        </div>

        <div className="filter">
          <label>Cluster</label>
          <select value={clusterFilter} onChange={(e) => setClusterFilter(e.target.value)}>
            <option value="">All</option>
            <option value="cluster-a-32">cluster-a-32</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
          </select>
        </div>

        <div className="filter">
          <label>Space Available (Max)</label>
          <input
            type="number"
            placeholder="Enter max space available"
            value={spaceAvailableLimit}
            onChange={(e) => setSpaceAvailableLimit(e.target.value)}
          />
        </div>
      </div>

      <div className="warehouse-list">
        {filteredWarehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="warehouse-item"
            onClick={() => handleSelectWarehouse(warehouse.id)}
          >
            <h3>{warehouse.name}</h3>
            <p>City: {warehouse.city}</p>
            <p>Space Available: {warehouse.space_available}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseList;
