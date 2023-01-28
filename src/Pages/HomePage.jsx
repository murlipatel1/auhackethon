import React from 'react'
import SideBar from '../component/Home/Navbar'
import Main from '../component/Home/Main'
import Navbar from '../component/Home/Navbar'
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
    
    {/* <Login />
    <SignUp /> */}
    
      <Routes>
        <Route exact path="/" element={<div className="bg-primary overflow-hidden font-Roboto">
      <Navbar />
      <Main />
    </div> }/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
      </Routes>
  
    </>
  )
}
