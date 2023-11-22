import { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import './cardStyle.css'

const Card = ({id, onClose, name, status, species, gender, origin, image}) => {
   const dispatch = useDispatch()
   const { myFavorites } = useSelector((state) => state)
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true);
         dispatch(addFav({id, name, image, name, status, species, gender, origin}));
      }
   }

   useEffect(() => {
      const isFavorite = myFavorites.some((favo) => favo.id === id);
      setIsFav(isFavorite)

      
   }, [myFavorites, id]);

   return (
      <div className="Card">
         <div>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         
         {
            isFav ? (
               <button className={"buttonWithe"} onClick={handleFavorite}>❤️</button>
               ) : (
               <button className={'buttonWithe'} onClick={handleFavorite}>🤍</button>
            )
         }     

         <div>
            <Link to={`/detail/${id}`}>
               <h4 className="card-name">{name}</h4>     
            </Link>
               <h4>{status}</h4>
               <h4>{species}</h4>
               <h4>{gender}</h4>
               <h4>{origin}</h4>
         </div>

               <img className='img.card' src={image} alt={name}/>
      </div>
   );
}

export default Card;
