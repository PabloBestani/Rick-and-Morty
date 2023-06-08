import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards, resetCards } from '../../redux/actions';
import styles from './favorites.module.css'
import Card from '../card/Card';


const Favorites = function ({myFavorites}) {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(true);
    }

    const handleFilter = (e) => {
        if (e.target.value === 'allCharacters') {
            dispatch(resetCards());
        } else {
            dispatch(filterCards(e.target.value));
        }
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='allCharacters'>Todos</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            <div className={styles.grid}>
                {
                    myFavorites.map((fav, index) => {
                        return <Card 
                            char={fav}
                            key={index}
                            />
                    })
                }
            </div>
        </div>
    )
}


export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);