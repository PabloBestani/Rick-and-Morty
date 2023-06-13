import React from "react";
import styles from './nav.module.css';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

const Nav = function ({onSearch, logout}) {
    let location = useLocation();
    return (
        <div className={styles.navContainer}>
            <div>
                {location.pathname !== '/home' && <Link to='/home'>
                    <button className={styles.botones}>Home</button>
                    </Link>}
                {location.pathname !== '/about' && <Link to='/about'>
                    <button className={styles.botones}>About</button>
                    </Link>}
                {location.pathname !== '/favorites' && <Link to={'/favorites'}>
                    <button className={styles.botones}>Favorites</button>
                    </Link>}
            </div>
            {
                <div className={location.pathname === '/home'
                ? styles.searchBar : styles.hiddenSB}>
                    <SearchBar onSearch={onSearch}/>
                </div>
            }
                
            <button className={styles.logout} onClick={logout}>Log Out</button>
        </div>
    );
}

export default Nav;