import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addpeople from "./pages/addpeople/Addpeople";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="addpeople" element={<Addpeople/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
