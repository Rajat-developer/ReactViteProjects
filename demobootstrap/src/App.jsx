import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Demobootstrap from './components/demobootstrap' // in this Demobootsrap is always capital

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
     < Route path="/" element={<Demobootstrap/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

