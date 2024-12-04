import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Indexpage from "./Components/Pages/Indexpage";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Indexpage /> */}

      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route  index element= {<Home />}/>
        <Route path="/dashboard" element={<Indexpage />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
