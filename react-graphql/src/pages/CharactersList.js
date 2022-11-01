import React from 'react'
import {useQuery, gql} from '@apollo/client'
import './CharacterList.css'
import { useCharacters } from '../Hooks/useCharacters'
import { Link } from 'react-router-dom'


const CharactersList = () => {


    const {error, loading, data} = useCharacters();
    if(loading) return(
        <div>spinner ....</div> 
    )

    if(error) return <div>Something went wrong </div>
  return (
    <div className='CharacterList'>
        {data.characters.results.map(character => {
            return(<Link to={`/${character.id}`}>
                <img src={character.image}/>
                <h2> {character.name}</h2>
                </Link>
            )
        })}
      
    </div>
  )
}

export default CharactersList
