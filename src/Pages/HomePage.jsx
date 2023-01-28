import React from 'react'
import SideBar from '../component/Home/Navbar'
import Main from '../component/Home/Main'
import Navbar from '../component/Home/Navbar'
import Login2 from './Login2'

import SignUp2 from './SignUp2'

export const HomePage = () => {
  return (
    <>
    <div className="bg-primary overflow-hidden font-Roboto">
      <Navbar />
      <Main />
    </div>
    <Login2 />
    <SignUp2 />
    </>
  )
}
