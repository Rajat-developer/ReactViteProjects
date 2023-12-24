import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Weatherapp from './components/weatherApp/weatherapp'

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
       < Route path="/" element={<Weatherapp/>}/>

      </Routes>
      </BrowserRouter>
     
    
  );
}

export default App;



