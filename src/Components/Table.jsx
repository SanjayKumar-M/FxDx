import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import '../Styles/Table.css';

const Table = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets', {
          params: {
            limit: 4,
            sort: 'marketCap',
          },
        });
        setCryptoData(response.data.data);
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
          // Fetch historical data for the crypto
          const historyResponse = await axios.get(
            `https://api.coincap.io/v2/assets/${crypto.id}/history`,
            {
              params: {
                interval: 'h1',
                limit: 24,
              },
            }
          );
  
          // Find the chart canvas element
          const chartCanvas = document.getElementById(`chart-${crypto.id}`);
          if (chartCanvas) {
            if (chartCanvas.chart) {
              chartCanvas.chart.destroy();
            }
  
           
            const ctx = chartCanvas.getContext('2d');
            chartCanvas.chart = new Chart(ctx, {
              type: 'line', 
              data: {
                labels: historyResponse.data.data.map((priceData) =>
                  new Date(priceData.time).toLocaleTimeString()
                ),
                datasets: [
                  {
                    label: 'Last 24 Hours',
                    data: historyResponse.data.data.map((priceData) => priceData.priceUsd),
                    borderColor: 'green',
                    borderWidth: 1,
                    fill: true, 
                    backgroundColor: 'rgba(0, 128, 0, 0.2)',
                  },
                ],
              },
              options: {
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false, 
                  },
                },
              },
            });
          }
        } catch (error) {
          console.error(`Error fetching historical data for ${crypto.id}:`, error);
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
              <td id='t-name'>
                <span>
                  <img
                    src={`https://coingecko.com/coins/${crypto.id}/icon`}
                    alt={`${crypto.name} `}
                    className="crypto-logo"
                  />
                </span>
              </td>
              <td>${Number(crypto.priceUsd).toFixed(2)}</td>
              <td>${Number(crypto.volumeUsd24Hr).toFixed(2)}</td>
              <td id='chart-t'>
              <canvas
                id={`chart-${crypto.id}`}
              
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
