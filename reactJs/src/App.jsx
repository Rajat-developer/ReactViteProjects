import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import First from './components/miniStore/first';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
       < Route path="/" element={<First/>}/>
  
       

      </Routes>
      </BrowserRouter>
     
    
  );
}

export default App;






