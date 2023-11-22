import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detailStyle.css'

export const Detail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if(data.name){
          setCharacter(data);
        } else {
          window.alert("No hay personajes con este ID :l");
        }
      });
      return setCharacter({})
  }, [id]);

  return (
    <div className='container-detail'>
        <h1>Detail</h1>
        <h2>Name | {character.name}</h2>
        <h3>Status | {character.status}</h3>
        <h3>Specie | {character.species}</h3>
        <h3>Gender | {character.gender}</h3>
        {character.origin && <h3>Origin | {character.origin.name}</h3>}
        <img src={character.image} alt={character.names} />
    </div>
  )
}
