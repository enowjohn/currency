// src/components/molecules/CurrencySelector.jsx
// import React from 'react';
import PropTypes from 'prop-types';
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

CurrencySelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrencySelector;
















// // src/components/molecules/CurrencySelector.jsx
// // import React from 'react';
// // import Input from '../atoms/Input';
// import Label from '../atoms/Label';

// const CurrencySelector = ({ label, value, onChange, options }) => (
//   <div className="mb-4">
//     <Label>{label}</Label>
//     <select value={value} onChange={onChange} className="john">
//       {options.map(option => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// export default CurrencySelector;
