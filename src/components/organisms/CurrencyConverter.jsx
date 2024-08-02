// src/components/organisms/CurrencyConverter.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencySelector from '../molecules/CurrencySelector';
import Input from '../atoms/Input';
// import Button from '../atoms/Button';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [fromCurrency] = useState('XOF');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    axios.get('https://open.er-api.com/v6/latest/XOF')
      .then(response => {
        const currencyData = response.data;
        setCurrencies(Object.keys(currencyData.rates));
        setConvertedAmount(amount * currencyData.rates[toCurrency]);
      })
      .catch(error => {
        console.error('Error fetching the currency data:', error);
      });
  }, [toCurrency, amount]);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value);

  return (
    <div  className='main'>
      <h1 className='inputs'>Currency Converter</h1>
      <Input type="number" value={amount} onChange={handleAmountChange} />
      <CurrencySelector label="To Currency" value={toCurrency} onChange={handleToCurrencyChange} options={currencies} />
      <h2 className='result'>
        {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
      </h2>
    </div>
  );
};

export default CurrencyConverter;
