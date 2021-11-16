import './App.css';
import Login from './components/Login';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes 
}  from 'react-router-dom';

import Registro from './components/Registro';



function App() {


 
  return (

    <Router>
   
    <div className="App"> 
          <Routes>
              <Route path="/" element={ <Login />} />
              <Route path="/login" element={ <Login />} />
              <Route path="/registro" element={ <Registro />} />
              <Route path="/home/:email"  element={ <Home />} />
          </Routes>
       
    </div>

    </Router>


  );
}

export default App;
