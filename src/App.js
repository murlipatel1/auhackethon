import "./App.css"
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./Pages/HomePage"
import Overview from "./Pages/Dashboard/Overview"
import BuyStocks from "./Pages/Dashboard/BuyStocks"
import SellStocks from "./Pages/Dashboard/SellStocks"
import Rebalancing from "./Pages/Dashboard/Rebalancing"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/overview" element={<Overview />} />
        <Route exact path="/buystock" element={<BuyStocks />} />
        <Route exact path="/sellstock" element={<SellStocks />} />
        <Route exact path="/rebalancing" element={<Rebalancing />} />
      </Routes>
    </>
  )
}

export default App
