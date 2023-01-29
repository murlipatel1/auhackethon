import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import Navbar from "../component/Home/Navbar"

const Login = () => {
  let navigate = useNavigate()
  const host = "http://localhost:5000"
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    console.log("Clicked")
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email , password: credentials.password }),
    });
    const json = await response.json()
    console.log(json)
    if(json.success){
    if(true){
    // redirect
    localStorage.setItem('token',json.authToken)
    navigate("/overview")
    }else{
      alert("Invalid Type")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <section className="gradient-form h-full bg-primary md:h-screen">
        <div className="container h-full py-12 px-6">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
            <div className="xl:w-10/12">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-16"
                          src="./images/logo.png"
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                          We are The StockHive Team
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <p className="mb-4">Please Login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-bold uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-secondary hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link to={"/signup"}>
                            <button
                              type="submit"
                              className="inline-block rounded border-2 border-red-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-red-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Sign Up
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex items-center rounded-b-lg bg-gradient-to-r from-[#F9790E] to-[#ff7300] lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
}

export default Login
