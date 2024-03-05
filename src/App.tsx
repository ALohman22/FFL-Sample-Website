import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Margin from "./components/topMargin";
import Home from './screens/home'
import Uppers from './screens/uppers'
import Lowers from './screens/lowers'
import Barrels from './screens/barrels'
import Parts from './screens/parts'

function App() {

  return (
    <div id='pageLayout'>
      <BrowserRouter>
        <Margin></Margin>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/uppers' element={<Uppers/>}></Route>
          <Route path='/lowers' element={<Lowers/>}></Route>
          <Route path='/barrels' element={<Barrels/>}></Route>
          <Route path='/parts' element={<Parts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
