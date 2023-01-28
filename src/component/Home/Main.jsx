import React from "react"

export default function Main() {
  return (
      <div className="pt-8">
        <div className="container mx-auto flex flex-col flex-wrap items-center px-6 md:px-16 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Elevate your stock portfolio with StockHive
            </h1>   
            <p className="mb-8 text-2xl leading-normal">
              Simplify and optimize your stock management with our user-friendly
              platform
            </p>
            <button className="focus:shadow-outline mx-auto mt-4 rounded-lg bg-secondary px-8 pt-[6px] pb-2 font-bold  text-black hover:border-2 hover:border-secondary hover:bg-transparent hover:duration-300 focus:outline-none lg:mx-0 lg:mt-0 ">
              Login
            </button>
          </div>
          <div className="w-full py-6 text-center md:w-3/5 md:flex md:justify-center">
            <img
              className="z-50 w-full md:w-4/5"
              src="./images/hero.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
  )
}
