import { useState } from "react";
import './searchBarStyle.css';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className="Searchbar">
         <input
         value={id} 
         onChange={handleChange} 
         type='search'
         placeholder="Escribe ID..."
         className="inputSearch"
          />
         <button onClick={() => {onSearch(id); setId("")}} className="buttonSearch">Agregar</button>
      </div>
   );
}
