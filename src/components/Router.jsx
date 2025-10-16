import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
import Collatz from './Collatz'
import TablaMultiplicar from './TablaMultiplicar'
import TablaMultiplicarv2 from './TablaMultiplicarv2'

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cine" element={<Cine/>} />
            <Route path="/musica" element={<Musica/>}/>
            <Route path="/formsimple" element={<FormSimple/>}/>
            <Route path="/collatz" element={<Collatz/>}/>
            <Route path="/tabla" element={<TablaMultiplicar/>}/>
            <Route path="/tabla2" element={<TablaMultiplicarv2/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router