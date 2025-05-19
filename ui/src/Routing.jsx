import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import About from './pages/About'
import EmiCalc from './pages/EmiCalc'
import Member from './pages/Member'
function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/emi" element={<EmiCalc/>} />
            <Route path="/member" element={<Member/>} />

        </Routes>
    </div>
  )
}

export default Routing