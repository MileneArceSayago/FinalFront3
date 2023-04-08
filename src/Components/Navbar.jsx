import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) =>{
    dispatch({type: 'CAMBIAR_TEMA', theme})
  };

  return (
    <nav>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/contact">Contacto</Link>
      </button>
      <button>
        <Link to="/favs">Favs</Link>
      </button>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? '🌙':'☀'}</button>
    </nav>
  )
}

export default Navbar