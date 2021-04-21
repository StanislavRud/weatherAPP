import './App.css';
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import * as React from "react";
import {weatherAPI} from "./components/API/api";

class App extends React.Component {

    state = {
        city: undefined,
        country: undefined,
        temp: undefined,
        pressure: undefined,
        feelsLike: undefined,
        tempMin: undefined,
        tempMax: undefined,
        img: undefined,
        error: undefined,
    };

    gettingWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            weatherAPI.getWeather(city)
                .then(data => {
                        this.setState({
                            city: data.name,
                            country: data.sys.country,
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            feelsLike: data.main.feels_like,
                            tempMin: data.main.temp_min,
                            tempMax: data.main.temp_max,
                            img: data.weather.icon,
                            error: undefined
                        })
                    }
                );
            e.target.elements.city.value = '';
        } else {
            this.setState({
                city: undefined,
                error: 'Input your city'
            })
        }

    };

    render() {
        return (
            <div className="App">
                <h1>Weather APP</h1>
                <Search gettingWeather={this.gettingWeather}/>
                <Weather city={this.state.city}
                         temp={this.state.temp}
                         country={this.state.country}
                         pressure={this.state.pressure}
                         feelsLike={this.state.feelsLike}
                         tempMin={this.state.tempMin}
                         tempMax={this.state.tempMax}
                         img={this.state.img}
                         error={this.state.error}

                />
            </div>
        );
    }


}

export default App;
