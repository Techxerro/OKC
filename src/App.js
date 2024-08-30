import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import WhyChooseUs from "./Components/Whychooseus";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Deepcleaning from "./Components/Services/Deepcleaning";
import Powerwashing from "./Components/Services/Powerwashing";
import ChandelierCleaning from "./Components/Services/ChandelierCleaning";
import Basiccleaning from "./Components/Services/BasicCleaning";
import RemodelCleaning from "./Components/Services/RemodelCleaning";
import Commercialcleaning from "./Components/Services/CommercialCleaning";
import Ethicalsource from "./Components/Ethicalsource";
import Pricing from "./Components/Pricing";
import Newhome from "./Components/Newhome/Newhome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newhome" element={<Newhome />} />
          <Route path="/about" element={<About />} />
          <Route path="/Why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* <Route path='/services' element={<Services/>}/> */}
          <Route path="/services/deep-cleaning" element={<Deepcleaning />} />
          <Route path="/services/power-washing" element={<Powerwashing />} />
          <Route
            path="/services/commercial-carpet-cleaning"
            element={<Commercialcleaning />}
          />
          <Route path="/services/basic-cleaning" element={<Basiccleaning />} />
          <Route
            path="/services/chandelier-cleaning"
            element={<ChandelierCleaning />}
          />
          <Route
            path="/services/remodel-cleanup"
            element={<RemodelCleaning />}
          />
          <Route path="/ethical-sourcing" element={<Ethicalsource />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

AOS.init({
  duration: 1500,
});

export default App;
