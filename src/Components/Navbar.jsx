import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) =>{
    dispatch({type: 'change_theme', theme})
  };

  return (
    <nav>
      
      <Link to="/home"><button>Home🏠</button></Link>
      <Link to="/contact"><button>Contact👤</button></Link>
      <Link to="/favs"><button>Favs❤️</button></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? 'Modo 🖥️: Noche':'Modo 🖥️: Dia'}</button>
    </nav>
  )
}

export default Navbar