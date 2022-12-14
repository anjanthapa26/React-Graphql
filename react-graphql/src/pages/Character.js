import React from 'react'
import { useParams } from 'react-router'
import {useCharacter} from '../Hooks/useCharacter'
import './Character.css'


const Character = () => {

    const {id} = useParams();
    const {data, loading, error} = useCharacter(id);

    console.log({error, loading, data})

    if (error) return <div>Something went wrong</div>

    if (loading) return <div> It's a character spinner loading .... </div>
  return (
    <div className='Character'>
        <img src={data.character.image} width= {750} height = {750} />
        <div className='Character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='Character-episode'>
                {data.character.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>{episode.episode} </b>
            </div>
                })}
        </div>
    </div>
    </div>
  )
}

export default Character
