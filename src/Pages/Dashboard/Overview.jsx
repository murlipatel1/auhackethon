import React from "react"
import SideBar from "../../component/SideBar"

const Overview = () => {
  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="overview" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Overview</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
