import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserInfo, login } from "../Services/FirebaseAuth";

import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    login(e.email, e.password)
      .then((data) => {
        console.log(data.user);
        alert("Bienvenido");
        navigate(`/home/${data.user.email}`);
        
      })
      .catch((error) => {
        console.log(error);
        alert("usuario incorrecto");
      });
  };

  return (
    <div style={_styleLogin.divMain}>
      <form onSubmit={handleSubmit(onSubmit)} style={_styleLogin.form}>
      <h1 > Inicio de sesion</h1>
        <div style={_styleLogin.spacios}>
          <label htmlFor="email"> Email </label>
          <input id="email" {...register("email", { required: true })} />
          {errors.email && errors.email.type === "required" && (
            <span>Email es requerido</span>
          )}
        </div>

        <div style={_styleLogin.spacios}>
          <label htmlFor="email">Password </label>
          <input type="password" id="password" {...register("password", { required: true })} />
          {errors.password && errors.password.type === "required" && (
            <span>Password es requerido</span>
          )}
        </div>

        <input style={_styleLogin.spacios} type="submit" />
        <Link to="/registro">
        <button style={_styleLogin.spacios}>Registrar usuario </button>
        </Link>
      </form>


    </div>
  );
};

const _styleLogin = {
  divMain:{
    width: "100%", /* Can be in percentage also. */
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

  },
  form:{
    margin: "10px",
    padding: '20px',
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  headerForm:{
    height: "50px",
    backgroundColor: "#595959",
  },
  spacios:{
    margin: "5px 10px"
  }


};

export default Login;
