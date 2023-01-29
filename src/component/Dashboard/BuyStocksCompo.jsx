import axios from "axios"
import React, {useState, useEffect} from "react"
import Select from "react-select"

export default function BuyStocksCompo() {
  const buyStocksOptions = [
    {
      name: "AAPL",
      label: "AAPL",
    },
    {
      name: "TSLA",
      label: "TSLA",
    },
    {
      name: "msft",
      label: "MSFT",
    },
    {
      name: "ADBE",
      label: "ADBE",
    },
    {
      name: "NFLX",
      label: "NFLX",
    },
  ]

  const [selectedOptions, setSelectedOptions] = useState(null)
  const [stockData, setStockData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [units, setUnits] = useState(0)
  const [ownedStocks, setOwnedStocks] = useState([])

  useEffect(() => {
    if (selectedOptions && units > 0) {
      setIsLoading(true)
      axios
        .get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedOptions.name.toUpperCase()}&apikey=7GS96CNUZ6GG8B4K`
        )
        .then((res) => {
          setStockData(res.data["Global Quote"])
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [selectedOptions, units])

  // console.log(stockData)
  // console.log(units)

  const handleBuy = () => {
    setOwnedStocks((prev) => [
      ...prev,
      {
        name: selectedOptions.name,
        units: units,
        price: stockData["05. price"],
        boughtPrice: (stockData["05. price"] * units).toFixed(2),
      },
    ])
  }
  useEffect(() => {
    const prevOwnedStocks =
      JSON.parse(localStorage.getItem("ownedStocks")) || []
    localStorage.setItem(
      "ownedStocks",
      JSON.stringify([...prevOwnedStocks, ...ownedStocks])
    )
  }, [ownedStocks])
  // console.log(ownedStocks)

  return (
    <div className="mt-8">
      <div className="grid grid-cols-overviewGrid px-5 text-xl font-semibold">
        <h1> Stock Names </h1>
        <h1 className="justify-self-center"> Units </h1>
        <h1 className="justify-self-center"> Price per unit ($) </h1>
        <h1 className="justify-self-center"> Total Price ($) </h1>
      </div>
      {/* All cards will be here */}
      <div className="mt-5 space-y-5">
        <div className="grid grid-cols-overviewGrid items-center bg-secondary-light px-5 py-3">
          <div className="flex gap-2">
            <Select
              options={buyStocksOptions}
              onChange={setSelectedOptions}
              defaultValue={selectedOptions}
              placeholder="Select Stock"
              className="w-4/5 rounded-md border-2 border-secondary bg-transparent text-lg"
            />
          </div>
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="select units"
            className=" w-[85%] justify-self-center rounded-md border-2 border-secondary bg-transparent px-2 text-center text-lg"
            onChange={(e) => setUnits(e.target.value)}
          />

          <h3 className="justify-self-center text-lg">
            {isLoading ? "Loading..." : stockData && stockData["05. price"]}
            {/* {stockData && stockData["05. price"]} */}
          </h3>
          <h3 className="justify-self-center text-lg">
            {isLoading
              ? "Loading..."
              : stockData && stockData["05. price"] * units}
            {/* {stockData && stockData["05. price"]} */}
          </h3>
          <button
            className="w-4/5 justify-self-center rounded-md border-2 border-secondary py-1 text-black hover:bg-secondary hover:text-white hover:duration-300"
            onClick={handleBuy}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
