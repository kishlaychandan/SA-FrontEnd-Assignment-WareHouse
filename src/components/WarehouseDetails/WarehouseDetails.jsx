import React from 'react';
import { useParams } from 'react-router-dom';
import warehouses from '../../assets/warehouses.json';
import './WarehouseDetails.css';

const WarehouseDetails = () => {
  let { id } = useParams();
  id=Number(id);
  // Find the warehouse object with the matching ID
  const warehouse = warehouses.find((wh) => wh.id === id);

  // If warehouse is not found, display a message
  if (!warehouse) return <p>Select a warehouse to see details.</p>;

  return (
    <div className="warehouse-details">
      <h2>{warehouse.name}</h2>
      <p><strong>Code:</strong> {warehouse.code}</p>
      <p><strong>City:</strong> {warehouse.city}</p>
      <p><strong>Space Available:</strong> {warehouse.space_available}</p>
      <p><strong>Type:</strong> {warehouse.type}</p>
      <p><strong>Cluster:</strong> {warehouse.cluster}</p>
      <p><strong>Registered:</strong> {warehouse.is_registered ? 'Yes' : 'No'}</p>
      <p><strong>Live:</strong> {warehouse.is_live ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default WarehouseDetails;
