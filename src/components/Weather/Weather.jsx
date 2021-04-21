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
                    </div>
                    <div className="pressure">
                        <p>Pressure: {props.pressure}</p>
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