import React from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import WeatherData from './WeatherData';

class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      lat: '',
      lon: '',
      loading: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.getWeatherData(this.state.lat, this.state.lon);
    this.setState({ loading: true });
  }

  getWeatherData(lat, lon) {
    axios({
      method: 'post',
      url: '/weather',
      data: { lat, lon },
    }).then((res) => {
      this.setState({
        weatherData: res.data.currently,
        lat: '',
        lon: '',
        loading: false,
      });
    });
  }

  updateInput(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { weatherData } = this.state;
    let conditions = '';
    let renderDisplay = <h1>Enter a latitude and longitude below to display weather data</h1>;

    if (this.state.loading) renderDisplay = <LoadingScreen />;

    if (weatherData && !this.state.loading) {
      const { temperature, summary } = weatherData;
      conditions = weatherData.icon;
      renderDisplay = (
        <WeatherData temperature={temperature} summary={summary} conditions={conditions} />
      );
    }

    return (
      <div className={`weather-container ${conditions}`}>
        <div className="lat-lon-input-container">
          <div className="lat-lon-inputs">
            <input
              id="lat"
              className="coordinate-entry"
              type="text"
              value={this.state.lat || ''}
              onChange={e => this.updateInput(e)}
              placeholder="Enter Latitude"
            />
            <input
              id="lon"
              className="coordinate-entry"
              type="text"
              value={this.state.lon || ''}
              onChange={e => this.updateInput(e)}
              placeholder="Enter Longitude"
            />
          </div>
          <button
            className="coordinate-entry submit-button"
            onClick={e => this.onSubmit(e)}
            disabled={(!this.state.lat || !this.state.lon)}
          >Submit</button>
        </div>
        {renderDisplay}
        <style jsx>{`
            .weather-container {
              height: 100vh;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background-color: #7ec0ee;
            }

            .lat-lon-input-container {
              position: absolute;
              bottom: 0;
              padding: 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .lat-lon-inputs {
              text-align: center;
            }

            .submit-button {
              width: 10rem;
              background-color: #4bd9ff;
              color: black;
            }

            .submit-button:hover {
              background-color: #1daddd;
            }

            .submit-button:disabled {
              opacity: 0.5;
            }

            .submit-button:disabled:hover {
              background-color: #4bd9ff;
            }

            .coordinate-entry {
              width: 12rem;
              margin: 1rem;
              height: 2rem;
              border-radius: 3px;
              border: none;
              font-size: 1.5rem;
            }

            .clear-day {
              background-color: #7ec0ee;
            }

            .clear-night {
              background-color: #2e4482;
            }

            .rain {
              background-color: #84b4ca;
            }

            .snow {
              background-color: #FFFAFA;
            }

            .sleet {
              background-color: #D9DCD3;
            }

            .wind {
              background-color: #696969;
            }

            .fog {
              background-color: #cbc5b1;
            }

            .cloudy {
              background-color: #AEA394;
            }

            .partly-cloudy-day {
              background-color: #d0e2ed;
            }

            .partly-cloudy-night {
              background-color: #2a556f;
            }
          `}</style>
      </div>
    );
  }
}

export default WeatherDisplay;
