import React from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => (
  <div className="app">
    <WeatherDisplay />
    <style jsx>{`
      :global(body) {
        margin: 0;
      }

      .app {
        font-family: "Open Sans";
      }
    `}</style>
  </div>
);

export default App;
