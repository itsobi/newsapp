import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import TopicsNavbar from "./components/TopicsNavbar";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <TopicsNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
