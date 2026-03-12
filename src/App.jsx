import { useState } from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import MainPage from "./components/__organisms/MainPage/mainpage";
import Contact from "./components/__organisms/Contact/Contact";
import Contacts from "./components/__organisms/Contact/Contacts";
import Data from "../Data.json";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-between items-center  w-full h-[100px]   px-5  text-white border-b border-b-[rgba(255,255,255,0.2)] ">
          <h1>THE PLANETS</h1>
          <div className="flex gap-4.5">
            {Data.map((planet) => {
              return (
                <Link
                  key={planet.name}
                  to={`contact/${planet.name}`}
                  className=""
                >
                  {planet.name}
                </Link>
              );
            })}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:name" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
