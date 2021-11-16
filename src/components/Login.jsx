import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { getUserInfo, login } from "../Services/FirebaseAuth";

import {
  BrowserRouter as Router,
  Link, useNavigate
}  from 'react-router-dom';

const Login = () => {

  let navigate  = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (e) => {
    login(e.email,e.password).then(data => {
      console.log(data.user);
      navigate(`/home/${data.user.email}`);
    }).catch(error => {
        console.log(error)
    }); 


  }
 

  return (

    <div> 

  
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> 

      <h1> Inicio de sesion</h1>
      <label htmlFor="email"> Email </label>
      <input id="email" {...register('email', { required: true })} />
      {errors.email &&  errors.email.type === "required" && <span>Email es requerido</span>}
 
      </div>

      <div>

      <label htmlFor="email">Password </label>
      <input id="password" {...register('password', { required: true })} />
      {errors.password && errors.password.type === "required" && <span>Password es requerido</span>}

      </div>
   
       <input type="submit"   />

    </form>

    <Link to="/registro" ><button>Registrar usuario </button></Link>

    </div>
    
  );
}     


export default Login;
