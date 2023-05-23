import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);
  
  return (
    <div>
      {/* renderizado condicional */}
      {/* en caso de que character posea la prop name hacer: */}
      {character.name ? (
          <>
            <h3 >{character.name}</h3>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
            <img src={character.image} alt='img' />
          </>
        ):(
          // si no se cumple la condicion hacer:
          <h3>
            Loading...
          </h3>
        )
      };
    </div>
  )
};

export default Detail;