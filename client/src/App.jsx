import { useState } from 'react'
import './App.css'
import { NavBar,Footer,Home,Login,Signup,Redirect, MyUrls } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/:id" element={<Redirect/>}/>
        <Route path="/myUrls" element={<MyUrls/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
