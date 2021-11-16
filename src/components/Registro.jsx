import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {  singUp } from "../Services/FirebaseAuth";

import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";


const Registro = () => {

  let navigate = useNavigate();
 
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = (e) => {
    singUp(e.email,e.password);
    alert("REGISTRO EXITOSO!")
    navigate(`/login`);
  }
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> 
      <h1> Registro de usuario </h1>

      <label htmlFor="email">Email </label>
      <input id="email" {...register('email', { required: true })} />
      {errors.email &&  errors.email.type === "required" && <span>Email es requerido</span>}
 
      </div>

      <div>
      <label htmlFor="email">Password </label>
      <input id="password" {...register('password', { required: true })} />
      {errors.password && errors.password.type === "required" && <span>Password es requerido</span>}

      </div>
   
        <input type="submit"  placeholder="A"  />
 
        <Link to="/login" ><button>Volver al login </button></Link>

    </form>
  );
}     


export default Registro;
