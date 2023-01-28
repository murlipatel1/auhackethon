import React from "react"
import SideBar from "../../component/SideBar"

const BuyStocks = () => {
  return (
    <div className="bg-white font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="buystock" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Buy Stocks</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyStocks
