import axios from 'axios';
import { useState } from 'react';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
// import {Card} from './components/card/Card.jsx';
import Form from './components/FormApp/Form';
import { Cards } from './components/cards/Cards.jsx';
import { Nav } from './components/navBar/Nav.jsx';
import { About } from './components/about/About.jsx';
import { Detail } from './components/detailCards/Detail.jsx';
import { NotFound } from './components/notFound/NotFound';
import { Ocult } from './components/menuOcult/Ocult';
import Favorites from './components/favorites/Favorites';

function App() {
   const navigate = useNavigate();
   const [ access, setAccess ] = useState(false);
   // const email = 'user-123peperoni@gmail.com';
   // const password = 'userPassword_1233'
   
   const [characters, setCharacters] = useState([])
   const location = useLocation();
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID :C!');
         } 
      });
   }

   const onClose = (id) => {
     setCharacters(
      characters.filter((character) => {
         return character.id !== id;
      })
     )
   }

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/login');
   }, [access]);

   // Decide si mostrar el componente de inicio de sesión
  const LoginForm = location.pathname == '/login';

   return (
      <div className='App'>
         {/* {LoginForm && <Form/>} */}
         {!LoginForm && <Nav onSearch={onSearch}/>}
         
         <Ocult/>

         <Routes>
            
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Form loginUser={login}/>}/>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='*' element={<NotFound/>} />
            
         </Routes>
      </div>
   )
}

export default App;
