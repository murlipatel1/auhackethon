import React from "react"
import SideBar from "../../component/SideBar"

const SellStocks = () => {
  return (
    <div className="bg-background font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="sellstock" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Sell Stocks</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellStocks
