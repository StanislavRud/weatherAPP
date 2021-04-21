import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={props.gettingWeather}>
            <input type="text" name='city' placeholder="Input your city"/>
            <button>Get weather</button>
        </form>
    );
};

export default Search;