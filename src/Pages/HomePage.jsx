import React from 'react'
import SideBar from '../component/Home/Navbar'
import Main from '../component/Home/Main'
import Navbar from '../component/Home/Navbar'
import Login from './Login'
import SignUp from './SignUp'

export const HomePage = () => {
  return (
    <>
    <div className="bg-primary overflow-hidden font-Roboto">
      <Navbar />
      <Main />
    </div>
    <Login />
    <SignUp />
    </>
  )
}
