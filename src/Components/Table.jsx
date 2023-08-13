import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import '../Styles/Table.css'
const Table = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,ripple,chainlink',
            order: 'market_cap_desc',
            per_page: 4,
            page: 1,
            sparkline: false,
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cryptoData.length > 0) {
      cryptoData.forEach(async (crypto) => {
        try {
          const historyResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart`,
            {
              params: {
                vs_currency: 'usd',
                days: 1, 
              },
            }
          );

          const chartCanvas = document.getElementById(`chart-${crypto.id}`);
          if (chartCanvas) {
        
            if (chartCanvas.chart) {
              chartCanvas.chart.destroy();
            }

            const ctx = chartCanvas.getContext('2d');
            chartCanvas.chart = new Chart(ctx, {
              type: 'line',
              data: {
                labels: historyResponse.data.prices.map((priceData) =>
                  new Date(priceData[0]).toLocaleTimeString()
                ),
                datasets: [
                  {
                    label: 'Last 24 Hours',
                    data: historyResponse.data.prices.map((priceData) => priceData[1]),
                    borderColor: 'green', 
                    borderWidth: 2,
                    fill: false,
                  },
                ],
              },
              options: {
                scales: {
                  x: {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                    },
                  },
                },
              },
            });
          }
        } catch (error) {
          console.error(`Error fetching historical data for ${crypto.name}:`, error);
        }
      });
    }
  }, [cryptoData]);


  return (
    <div>

      <table id='table-cont'>
        <thead>
          <tr id='table-header'>
            <th>Name</th>
            <th>Price</th>
            <th>24hr Exchange</th>
            <th>Chart</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td id='t-name' > 
                {crypto.name}
                <span>
                  <img src={crypto.image} alt="Crypto Logo" />
                </span>
              </td>
              <td>{crypto.current_price}</td>
              <td>{crypto.total_volume}</td>
              <td id='chart-t'>
                <canvas
                  id={`chart-${crypto.id}`}
                  width={150}
                  height={50}
                ></canvas>
              </td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
