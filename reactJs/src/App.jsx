import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
 const [products, setproducts ] =useState([])
useEffect (()=>{
  axios.get('/api/products')
  .then((response)=>{
    setproducts(response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
})
  return (
    <>
     <h2>products:{products.length}</h2>
     {
      products.map((products, index)=>(
        <div key={products.id}>
          <h3>{products.title}</h3>
          <p>{products.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
