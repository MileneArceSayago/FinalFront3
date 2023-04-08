import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {

  const {state} = useContext(ContextGlobal)


  // Funcion que altera el estado del tema

  return (
      <div className={state.theme ? 'dark':'light'}>
              <Navbar/>
              <Outlet/>
              <Footer/>
      </div>
  );
}

export default App;
