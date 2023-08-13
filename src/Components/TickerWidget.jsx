import React, { useEffect, useState } from 'react';
import '../Styles/Ticker.css';

const TickerWidget = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,polygon,tether,chainlink')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(item => ({
          src: item.image,
          name: item.name,
          change: item.price_change_percentage_24h || 0,
        }));
        setCryptoData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id='ticker-cont'>
      {cryptoData.map((tick, index) => (
        <div key={index} id='tickerr'>
          <img src={tick.src} alt={`img${index}`} />
          <h3>{tick.name}</h3>
          <sub className={tick.change >= 0 ? 'green' : 'red'}>
            Today up {typeof tick.change === 'number' ? tick.change.toFixed(2) + '%' : '-'}
          </sub>
        </div>
      ))}
    </div>
  );
};

export default TickerWidget;
