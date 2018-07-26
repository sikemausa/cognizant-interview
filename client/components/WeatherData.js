import PropTypes from 'prop-types';
import React from 'react';

const WeatherData = ({ summary, temperature }) => {
  const roundedTemperature = Math.round(temperature);

  return (
    <div className="weather-data">
      <h1 className="temperature">{roundedTemperature}°</h1>
      <h2 className="summary">{summary}</h2>
      <style jsx>{`
        .weather-data {
          height: 300px;
          width: 200px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .temperature {
          color: rgba(255, 255, 255, 1);
          font-size: 4rem;
          margin: 0;
        }

        .summary {
          color: rgba(255, 255, 255, 1);
          font-size: 1.5rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

WeatherData.propTypes = {
  summary: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default WeatherData;
