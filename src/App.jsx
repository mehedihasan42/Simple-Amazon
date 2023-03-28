import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Product from './Components/Product/Product'

function App() {
  return(
    <>
     <Header></Header>
     <Shop></Shop>
    </>
  )
}

export default App
