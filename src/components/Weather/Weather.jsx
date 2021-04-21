import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.city &&
                <div>
                    <div className="city">
                        <h2>{props.city}, {props.country}</h2>
                    </div>
                    <div className="temp">
                        <p>Temp: {props.temp} °C</p>
                        <p>Feels like: {props.feelsLike} °C</p>
                        <p>Temp min: {props.tempMin}</p>
                        <p>Temp max: {props.tempMax}</p>
                    </div>
                    <div className="pressure">
                        <p>Pressure: {props.pressure}</p>
                    </div>
                    <div className="img">
                        <img src={`http://openweathermap.org/img/w/${props.img}.png`} alt=""/>
                    </div>
                </div>
            }
            <div className="error">
                {props.error}
            </div>
        </div>
    );
};

export default Weather;