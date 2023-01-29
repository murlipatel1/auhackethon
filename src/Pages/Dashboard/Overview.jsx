import React, {useEffect} from "react"
import SideBar from "../../component/SideBar"
import OwnedStocks from "../../component/Dashboard/OwnedStocks"
import axios from "axios"

const Overview = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/get/getquote", {
  //       company: "AAPL",
  //     })
  //     .then((res) => {
  //       // console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="overview" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Overview</h2>
            <OwnedStocks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
