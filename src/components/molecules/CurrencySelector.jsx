// src/components/molecules/CurrencySelector.jsx
import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

const CurrencySelector = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <Label>{label}</Label>
    <select value={value} onChange={onChange} className="john">
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default CurrencySelector;
