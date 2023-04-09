import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react"; 
import {ContextGlobal} from "./utils/global.context"
import { useLocation } from 'react-router-dom';

//const Card = ({ name, username, id}) => 
const Card = (props) => {

  const {state, dispatch} = useContext(ContextGlobal);
  const location = useLocation();

  const addFav = (dentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"add_fav", dentist})
  }


  const isFav = state.favsDentists.find((dentist) => dentist.id === props.id);


 return (
  <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    
      
      <Link to={`/detail/${props.id}`}>
      <div>
          <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
          <h4 className="centerText">{props.id} - {props.name}</h4>
          
          {location.pathname== '/home' &&<h5>{props.username}</h5>}

          {location.pathname !== '/home' &&   <div>
          <h5>{props.email}</h5> 
          <h5>{props.website}</h5> 
          <h5>{props.phone}</h5> 
          </div>
          }
        
          
        </div>
      </Link>
      <div>
        
        {location.pathname !== '/favs' && (
  <div><button onClick={() => addFav({id: props.id, name: props.name, username: props.username})} className="favButton" disabled={isFav}>Add favorite</button></div>
)}
      </div>
    </div>
);
;

 };

 
 
export default Card;
