import {Icon} from "@iconify/react"
import React from "react"
import {Link, useNavigate} from "react-router-dom"

export default function SideBar(props) {
  const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem("superAdminToken")
//     navigate("/adminLogin")
//   }

  const sidebarItems = [
    {
      name: "Overview",
      icon: "mdi:analytics",
      link: "/overview",
      active: "overview",
    },
    {
      name: "Buy Stocks",
      icon: "fluent:money-hand-24-filled",
      link: "/buystock",
      active: "buystock",
    },
    {
      name: "Sell Stocks",
      icon: "game-icons:sell-card",
      link: "/sellstock",
      active: "sellstock",
    },
    {
      name: "Portfolio Rebalancing",
      icon: "material-symbols:manage-accounts",
      link: "/rebalancing",
      active: "rebalancing",
    },
  ]

  const sidebarItemsList = sidebarItems.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-3 p-3 ${
        props.active === item.active ? "bg-[#f9780e23]" : null
      } `}
    >
      <Icon icon={item.icon} color={"black"} className="text-3xl" />
      <Link to={item.link}>
        <h2 className="text-2xl font-medium">{item.name}</h2>
      </Link>
    </div>
  ))

  return (
    <div
      className={` xs:w-4/5 flex min-h-screen w-fit bg-primary px-4 sm:w-3/5 lg:w-full font-Roboto
        `}
    >
      <div className="mt-5">
        <div className="flex items-center justify-between ml-5">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                src="../images/logo.png"
                alt="Logo"
                className="w-16"
              />
              <h1 className="text-3xl font-bold">
                StockHive
              </h1>
            </div>
          </Link>
        </div>

        <div className="mt-8 space-y-4 px-3">{sidebarItemsList}</div>

        <div className="mt-4 px-3">
          <button
            className="w-3/5 rounded bg-secondary px-5 py-1 text-2xl font-medium text-white lg:w-4/5"
            // onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
