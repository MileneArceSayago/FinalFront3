import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  

  const [dentist, setDentist] = useState({})
  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentistDetail = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    setDentist(data)
  };

  useEffect(() => {
    getDentistDetail();
  })





  return (
    <>
      <h1>Detail Dentist: {dentist.name} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {/* <div>
      <img className='doctor' src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>


      </div> */
      <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} email={dentist.email} phone={dentist.phone} website={dentist.website} ></Card>
      }
    
    
    </>
  )
}

export default Detail