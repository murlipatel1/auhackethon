import React from "react"
import {Link, useLocation} from "react-router-dom"
export default function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <nav className="w-full bg-primary px-5 pt-3 text-white md:px-16">
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-2">
        <div className="flex items-center pl-4">
          <Link to={"/"}>
            <div className="flex items-center gap-3 text-2xl font-bold lg:text-4xl">
              <img src="./images/logo.png" className="w-10" alt="logo" />
              <h1 className="text-black">StockHive</h1>
            </div>
          </Link>
        </div>
        <div className="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            className="focus:shadow-outline flex transform items-center p-1 text-black transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
          id="nav-content"
        >
          <ul className="list-reset flex-1 items-center justify-end lg:flex">
            <li className="mr-3">
              <Link to={"/"}>
                <h2 className="inline-block cursor-pointer py-2 px-4 text-black no-underline">
                  Home
                </h2>
              </Link>
            </li>
            <li className="mr-3">
              <h2 className="hover:text-underline inline-block cursor-pointer py-2 px-4 text-black no-underline hover:text-gray-800">
                About
              </h2>
            </li>
            <li className="mr-3">
              <h2 className="hover:text-underline inline-block cursor-pointer py-2 px-4 text-black no-underline hover:text-gray-800">
                News
              </h2>
            </li>
          </ul>
          <Link
            className={`focus:shadow-outline mx-auto mt-4 rounded-lg border-2 ${
              currentPath === "/signup"
                ? "bg-secondary text-white hover:bg-transparent hover:text-greyShade"
                : "bg-transparent text-greyShade hover:bg-secondary hover:text-white"
            }  border-secondary px-8 pt-[6px]  pb-2 font-bold  hover:duration-300 focus:outline-none lg:mx-0 lg:mt-0`}
            to="/signup"
            role="button"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  )
}
