import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  async function onSearch(id) {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = response.data;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const response = await axios(URL + `?email=${email}&password=${password}`)
        const { access } = response.data;
        setAccess(access);
        access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
    };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <>
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        {/* <Route path='*' element={<Cards characters={characters} onClose={onClose} />} /> */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
