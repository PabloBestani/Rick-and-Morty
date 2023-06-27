import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './components/nav/Nav';
import About from './views/about/About';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Detail from './components/detail/Detail';
import Error from './components/error/Error';
import Favorites from './components/favorites/Favorites';
import { removeFav } from './redux/actions';


function App({removeFav}) {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   // const [error404, setError404] = useState(false);


   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // useEffect(() => {
   //    setError404(isInvalidPath(location.pathname));
   // }, [location]);

   const onSearch = async(id) => {
      try {
         const numberId = id;
         // console.log(id);
         // console.log(numberId);

         if (characters.some((char) => char.id === numberId)) {
            return window.alert('Este personaje ya esta agregado');
         }
         
         const URL = "http://localhost:3001/rickandmorty/character/";
         const response = (await axios(URL + numberId)).data;
         setCharacters([response, ...characters]);
         // console.log(characters);


      } catch(error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }





     
   function onClose(id) {
      let filtrado = characters.filter((char) => char.id !== id);
      setCharacters(filtrado);
      removeFav(id);
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = (await axios(URL + `?email=${email}&password=${password}`)).data;
         
         const { access } = response;
         setAccess(access);
         if (access) {
            axios.delete(URL);
            navigate('/home');
         }
         

      } catch(error) {
         window.alert("Error al intentar loguearse");
         console.log(error.message);
      }
   }

   function logout () {
      setAccess(false);
   }

   // function isInvalidPath(path) {
   //    return (
   //       path !== '/' &&
   //       path !=='/home' &&
   //       path !== '/about' &&
   //       !path.startsWith('/detail/') &&
   //       path !== '/error'
   //    )
   // }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            {/* {error404 &&
               <Route path='/error' element={<Error />} />} */}
            <Route path='/' element={<Login login={login} />} />
            <Route path='/home'
               element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            {access && <Route path='*' element={<Error/>} />}
         </Routes>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      removeFav: (id) => dispatch(removeFav(id))
   };
};

export default connect(null, mapDispatchToProps)(App);
