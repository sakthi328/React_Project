import React from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css"
import Slider from "./components/slide";
import Place from "./components/Place";
import Chennai from "./components/Chennai";
import Rameshwaram from "./components/Rameshwaram";
import Kodaikanal from "./components/Kodaikanal";
import Ooty from "./components/Ooty";
import Kaniyakumari from "./components/Kanyakumari";
import Kumbakonam from "./components/Kumbakonam";
import Madurai from "./components/Madurai";
import Yarcaud from "./components/Yarcaud";
import Theni from "./components/Theni";
import Hogenakkal from "./components/Hogenakkal";


function App() {
  return (
  <div>
   < BrowserRouter >
   <Navbar/>
  <Slider/>
  <Place/>
  <Chennai/>
  <Rameshwaram/>
      <Kodaikanal/>
      <Ooty/>
      <Kaniyakumari/>
      <Kumbakonam/>
      <Madurai/>
      <Yarcaud/>
      <Theni/>
      <Hogenakkal/>

  </BrowserRouter>
     
  </div>    

  );
}

export default App;