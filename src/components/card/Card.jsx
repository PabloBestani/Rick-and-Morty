import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import style from './card.module.css';

export function Card({char, onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const [closeBtn, setCloseBtn] = useState(true);
   // const location = useLocation();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === char.id) {
            setIsFav(true);
         }
      })
   }, [myFavorites]);

   // useEffect(() => {
   //    for (let i = 0; i < myFavorites.length; i++) {
   //       if (myFavorites[i].id === char.id) {
   //          setIsFav(true);
   //       }
   //    }
   // }, [myFavorites]);

   useEffect(() => {
      if (!onClose) setCloseBtn(false);
   }, []);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(char.id);
      } else {
         setIsFav(true);
         addFav(char);
      }
   }

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite} >❤️</button>
            ) : (
               <button onClick={handleFavorite} >🤍</button>
            )
         }
         <NavLink to={`/detail/${char.id}`} className={style.link}>
            <h2>{char.name}</h2>
         </NavLink>

         <h2>{char.status}</h2>
         <h2>{char.species}</h2>
         <h2>{char.gender}</h2>
         <h2>{char.origin.name}</h2>
         <img className={style.imagen} src={char.image} alt='imagen' />
         {
            closeBtn &&
            <button className={style.boton} onClick={() => onClose(char.id)}>Delete</button>
         }
         {/* {
            location.pathname === '/home' &&
            <button className={style.boton} onClick={() => onClose(char.id)}>Delete</button>
         } */}
      </div>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
};

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);



