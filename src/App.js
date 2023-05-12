import { useState , useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx'

const EMAIL = `admin123@gmail.com`;
const PASSWORD = `admin123`;

export default function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter(
      (char) => char.id !== Number(id)));
  };

  const login = (userData) => {
    if (EMAIL === userData.email && PASSWORD === userData.password) {
      setAccess(true);
      navigate('/home');
    }else{
      return alert('invalid email or password')
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    < >
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        {/* <Route path='*' element={<Cards characters={characters} onClose={onClose} />} /> */}
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/Favorites' element={<Favorites />}/>
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </>
  );
}

