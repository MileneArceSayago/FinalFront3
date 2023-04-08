import Card from '../Components/Card'
import React, { useContext} from "react";
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists} = useContext(ContextGlobal);



  return (
    <>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
                    <div>
                    <h1>Dentists List</h1>
                        {dentists.length
                          ? dentists.map((dentist) => (
                                <div key={dentist.id}>
                                  <Card name={dentist.name} username={dentist.username} id={dentist.id} />
                                </div>
                            ))
                          : null}
                  </div>
  }
      </div>
      </>
  )
}

export default Home