import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import Overview from "./Pages/Overview";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
