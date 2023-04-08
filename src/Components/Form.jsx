import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isErrorUser, setIsErrorUser] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);



    const validateName = (name) => {
        return (name.length) > 5
        }


    const validateEmail = (email) => {
        return email.includes("@") & email.includes(".")
        }

    function onSubmitForm(e){
      e.preventDefault();


      if(validateName(name) && validateEmail(email)){
          setIsErrorUser(false)
          setIsValid(true)
          console.log("Paciente guardado")
      }else{
          setIsValid(false)
          setIsErrorUser(true)
          console.log("La info es incorrecta")
      }
  }

  return (
    <>
    <div>
    <h1>Veterinaria DH</h1>
    <h2>Ingresa los datos del paciente</h2>
    <form onSubmit={onSubmitForm}>
      <div>
            <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={name}
                    onChange={onChangeName}
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={onChangeEmail}
                />

                </div>
                {isErrorUser && <p>Por favor verifique su información nuevamente</p>}
                {isValid && <p>Gracias {name}, te contactaremos cuanto antes vía mail</p>}
                <button type="submit">Añade al paciente</button>
        </form>
    </div>
    </>
  );
};

export default Form;
