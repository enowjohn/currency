// src/components/atoms/Button.jsx
import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`px-4 py-2 bg-indigo-600 text-white round ${className}`}>
    {children}
  </button>
);

export default Button;
