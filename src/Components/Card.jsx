import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react"; 
import {ContextGlobal} from "./utils/global.context"
import { useLocation } from 'react-router-dom';


const Card = ({ name, username, id}) => {

  const {state, dispatch} = useContext(ContextGlobal);
  const location = useLocation();

  const addFav = (dentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"ADD_DENTIST_FAV", dentist})
  }


  const isFav = state.favsDentists.find((dentist) => dentist.id === id);


 return (
  <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
      
      <Link to={`/detail/${id}`}>
      <div>
          <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
          <h4>{id} - {name}</h4>
          <h5>{username}</h5>
        </div>
      </Link>
      <div>
        
        {location.pathname !== '/favs' && (
  <div><button onClick={() => addFav({id: id, name: name, username: username})} className="favButton" disabled={isFav}>⭐Add fav</button></div>
)}
      </div>
    </div>
);
;

 };

 
 
export default Card;
