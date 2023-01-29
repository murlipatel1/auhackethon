import React from "react"

export default function OwnedStocks() {
  // const ownedStocks = [
  //   {
  //     id: 1,
  //     name: "aapl",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 2,
  //     name: "amazon",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 3,
  //     name: "google",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 4,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 5,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 6,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 7,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 8,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 9,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 10,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 11,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 12,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  //   {
  //     id: 13,
  //     name: "facebook",
  //     units: 15,
  //     currentPrice: 10000,
  //     net: 2500,
  //     boughtAt: 500,
  //   },
  // ]

  const ownedStocks = localStorage.getItem("ownedStocks")
    ? JSON.parse(localStorage.getItem("ownedStocks"))
    : []

  console.log(ownedStocks)

  const ownedStocksList = ownedStocks.map((stock, index) => (
    <div
      key={index}
      className="grid grid-cols-overviewGrid items-center bg-secondary-light px-5 py-3"
    >
      <div className="flex gap-2">
        <h1 className="text-2xl font-medium">{index + 1}. </h1>
        <div>
          <h1 className="text-2xl font-medium uppercase">{stock.name}</h1>
          <h3>
            Bought at: <span>{stock.boughtPrice}</span>
          </h3>
        </div>
      </div>
      <h3 className="justify-self-center text-lg">{stock.units}</h3>
      <h3 className="justify-self-center text-lg">
        {stock.units * stock.boughtPrice}
      </h3>
      <h3 className="justify-self-center text-lg">{stock.price}</h3>
      <h3 className="justify-self-center text-lg">
        {(stock.price - stock.units * stock.boughtPrice).toFixed(2)}
      </h3>
    </div>
  ))

  return (
    <div className="mt-8">
      <div className="grid grid-cols-overviewGrid px-5 text-xl font-semibold">
        <h1> Stock Names </h1>
        <h1 className="justify-self-center"> Units </h1>
        <h1 className="justify-self-center"> Invested </h1>
        <h1 className="justify-self-center"> Current Price </h1>
        <h1 className="justify-self-center"> Net </h1>
      </div>
      {/* All cards will be here */}
      <div className="mt-5 space-y-5">{ownedStocksList}</div>
    </div>
  )
}
