import React, {useState, useEffect} from "react";
 
import {
    BrowserRouter as Router,
    Link, useNavigate, useParams
  }  from 'react-router-dom';


const Home = () => {
 
  const {email} = useParams();
  return (
    <section className="Home">
    <h3>Hello Home</h3>
    <h4> Bienvenido {email} </h4>
  </section>
  );
}     


export default Home;
