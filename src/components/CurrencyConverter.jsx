// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { HiOutlineStar, HiStar } from 'react-icons/hi';
// import './atoms/Button'
// import './atoms/Input'
// import './molecules/CurrencySelector'

// const CurrencyConverter = () => {
//   const [currencies, setCurrencies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [fromCurrency] = useState('XOF');
//   const [toCurrency, setToCurrency] = useState('USD');
//   const [amount, setAmount] = useState(1);
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   useEffect(() => {
//     axios.get('https://open.er-api.com/v6/latest/XOF')
//       .then(response => {
//         const currencyData = response.data;
//         setCurrencies(Object.keys(currencyData.rates));
//         setConvertedAmount(amount * currencyData.rates[toCurrency]);
//       })
//       .catch(error => {
//         console.error('Error fetching the currency data:', error);
//       });
//   }, [toCurrency, amount]);

//   const handleFavorite = (currency) => {
//     setFavorites(prevFavorites => 
//       prevFavorites.includes(currency) 
//       ? prevFavorites.filter(fav => fav !== currency) 
//       : [...prevFavorites, currency]
//     );
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleToCurrencyChange = (e) => {
//     setToCurrency(e.target.value);
//   };

//   const isFavorite = (currency) => favorites.includes(currency);

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
//       <h1 className="text-xl font-bold mb-4">Currency Converter</h1>
//       <div className="mb-4">
//         <input 
//           type="number" 
//           value={amount} 
//           onChange={handleAmountChange} 
//           className="w-full px-3 py-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4 relative">
//         <select 
//           value={toCurrency} 
//           onChange={handleToCurrencyChange} 
//           className="w-full px-3 py-2 border border-gray-300 rounded-md"
//         >
//           {favorites.map((currency) => (
//             <option className="bg-gray-200" value={currency} key={currency}>
//               {currency}
//             </option>
//           ))}
//           <option disabled>──────────</option> 
          
//           {currencies.filter(currency => !favorites.includes(currency)).map((currency) => (
//             <option value={currency} key={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//         <button
//           onClick={() => handleFavorite(toCurrency)}
//           className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
//         >
//           {isFavorite(toCurrency) ? <HiStar /> : <HiOutlineStar />}
//         </button>
//       </div>
//       <h2 className="text-lg font-semibold">
//         {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
//       </h2>
//     </div>
//   );
// };

// export default CurrencyConverter;
