// import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineStar, HiStar } from 'react-icons/hi';

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites = [],
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div>
      <label htmlFor={title} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          id={title}  // Match the label's htmlFor attribute
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {favorites.map((currency) => (
            <option className="bg-gray-200" value={currency} key={currency}>
              {currency}
            </option>
          ))}
          <option disabled>──────────</option> {/* Separator */}
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>
        <button
          onClick={() => handleFavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

CurrencyDropdown.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string),
  handleFavorite: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default CurrencyDropdown;
