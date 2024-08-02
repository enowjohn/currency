// src/components/atoms/Input.jsx
import React from 'react';

const Input = ({ value, onChange, type = "text", className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={`text ${className}`}
  />
);

export default Input;
