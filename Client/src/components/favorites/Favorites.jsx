import React from 'react'
import { useSelector } from 'react-redux'
import { Cards } from '../cards/Cards';
import Card from '../card/Card';


const Favorites = () => { 
    const myFavorites = useSelector((state) => state.myFavorites);
    return (
    <div>
        <h1>Mis Favoritos</h1>
        {
            myFavorites?.map((favorite, index) => {
                return(
                    <div key={index}>
                        <Card 
                            name={favorite.name}
                            status={favorite.state}
                            species={favorite.species}
                            origin={favorite.origin}
                            image={favorite.image}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Favorites;
