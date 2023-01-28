import React from "react"
import Main from "../component/Home/Main"
import Navbar from "../component/Home/Navbar"
import Login from "./Login"
import SignUp from "./SignUp"
import About from "../component/Home/About"
import {Route, Routes} from "react-router-dom"
import News from "../component/Home/News"

export const HomePage = () => {
  return (
    <>
      {/* <Login />
    <SignUp /> */}

      {/* <Routes>
        <Route
          exact
          path="/"
          element={ */}
            <div className="overflow-hidden bg-primary font-Roboto">
              <Navbar />
              <Main />
              <About/>
              <News/>
            </div>
          {/* }
        /> */}
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} /> */}
      {/* </Routes> */}
    </>
  )
}
