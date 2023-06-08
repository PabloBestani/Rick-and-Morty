import React from "react";
import { useState } from 'react'

const SearchBar = function ({onSearch}) {
    let [id, setId] = useState('');
    // let random = Math.floor(Math.random() * (826 - 1 + 1) + 1);




    const handleChange = function(event) {
        setId(event.target.value);
    }

    const handleSearch = () => {
        onSearch(id);
        setId('');
    }

    const handleRandom = function() {
        let random = Number(Math.floor(Math.random() * 826));
        onSearch(random);
    }

    return (
        <div>
            <input type="search" onChange={handleChange} value={id}></input>
            <button onClick={handleSearch}>Agregar</button>
            <button onClick={handleRandom}>Agregar Random</button>
        </div>
    );
}

export default SearchBar;