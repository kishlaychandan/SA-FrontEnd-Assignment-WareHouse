import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWarehouse } from '../../redux/warehouse/warehouseSlice';
import './EditWarehouseForm.css';

const EditWarehouseForm = ({ warehouse }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...warehouse });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWarehouse({ id: warehouse.id, updatedData: formData }));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-warehouse-form">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label>
        Cluster:
        <input type="text" name="cluster" value={formData.cluster} onChange={handleChange} />
      </label>
      <label>
        Space Available:
        <input type="number" name="space_available" value={formData.space_available} onChange={handleChange} />
      </label>
      <label>
        Status:
        <select name="is_live" value={formData.is_live} onChange={handleChange}>
          <option value={true}>Live</option>
          <option value={false}>Offline</option>
        </select>
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditWarehouseForm;
