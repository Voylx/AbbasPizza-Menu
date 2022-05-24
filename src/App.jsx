import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import { Home } from "../pages/Home";
import { MenuInfo } from "../pages/MenuInfo";
import { NotFound } from "../pages/NotFound";

//import Component
import { Header } from "../components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu">
            <Route path=":type" element={<MenuInfo />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
