import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = function() {
    let {id} = useParams();
    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            } 
        })
        return setCharacter({});
    }, [id]);


    return (
        <div>
            <h2 className={styles.nombre}>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt='imagen' />
        </div>
    );
}

export default Detail;