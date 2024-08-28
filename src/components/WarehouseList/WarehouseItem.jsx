import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WarehouseItem.css';

const WarehouseItem = ({ warehouse }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/warehouse/${warehouse.id}`);
  };

  return (
    <div className="warehouse-item" onClick={handleClick}>
      <h3>{warehouse.name}</h3>
      <p>City: {warehouse.city}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <p>Space Available: {warehouse.space_available}</p>
    </div>
  );
};

export default WarehouseItem;
