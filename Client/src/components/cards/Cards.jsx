import Card from '../card/Card.jsx';
import './cardsStyle.css'

export const Cards = (props) => {
   return (
      <section className='Cards'>
         {
            props.characters.map((card, index) => {
               return(
                      <div key={index} className='contenedor'>
                        <Card
                        id={card.id}
                        name={card.name}
                        status={card.status}
                        species={card.species}
                        gender={card.gender}
                        origin={card.origin.name}
                        image={card.image}
                        onClose={props.onClose}
                        />
                   </div>                    
               )
            })
         }
      </section>
   )
}