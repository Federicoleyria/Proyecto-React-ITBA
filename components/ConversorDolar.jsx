import React, { useState, useEffect } from 'react';

function ConversorPesos() {
  const [conversionRate, setConversionRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Estado para la moneda de destino

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const convertCurrency = () => {
    if (conversionRate !== null) {
      const result = amount / conversionRate[selectedCurrency];
      setConvertedAmount(result.toFixed(2)); // Redondeamos el resultado a dos decimales
    }
  };

  useEffect(() => {
    // Obtener tasas de conversión desde Peso Argentino (ARS) a otras divisas
    fetch('https://v6.exchangerate-api.com/v6/f2753e2e7a865582804f2f3d/latest/ARS')
      .then((response) => response.json())
      .then((data) => {
        setConversionRate(data.conversion_rates);
      })
      .catch((error) => {
        console.error('Error al obtener la tasa de conversión:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="textoPesoDolar">Convertidor de Moneda:</h1>
      <h2>Peso Argentino a Otras Divisas</h2>
      <label>Ingresa la cantidad en ARS:</label>
      <br />
      <input
        type="number"
        id="cantidadPesos"
        value={amount}
        onChange={handleAmountChange}
      />
      <label>Selecciona la moneda de destino:</label>
      <select
        id="monedaDestino"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {conversionRate !== null &&
          Object.keys(conversionRate).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        <option value="EUR">Euro (EUR)</option>
      </select>
      <br />
      <button className="button" onClick={convertCurrency}>
        Convertir
      </button>
      {convertedAmount !== null && (
        <p id="resultadoPesos">
          {amount} Peso Argentino equivale a {convertedAmount} {selectedCurrency}.
        </p>
      )}
    </div>
  );
}

export default ConversorPesos;
