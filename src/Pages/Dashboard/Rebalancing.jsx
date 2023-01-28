import React from "react"
import SideBar from "../../component/SideBar"

const Rebalancing = () => {
  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="rebalancing" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Portfolio Rebalancing</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rebalancing
