import { useState } from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router";
import Planet from "./pages/Planet";
import Data from "../Data.json";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HashRouter>
        <div className="flex justify-between items-center w-full h-[100px] px-5 text-white border-b border-b-[rgba(255,255,255,0.2) sm:h-[50px] ]">
          <Link to="/">THE PLANETS</Link>

          <button
            className="md:flex hidden flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
          </button>

          <div className="md:hidden flex gap-4.5">
            {Data.map((planet) => (
              <Link key={planet.name} to={`/${planet.name}`}>
                {planet.name}
              </Link>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#070724] z-50 flex flex-col px-5 pt-8 text-white">
            <button
              className="self-end text-2xl cursor-pointer mb-8"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {Data.map((planet) => (
              <Link
                key={planet.name}
                to={`/${planet.name}`}
                className="py-4 border-b border-b-[rgba(255,255,255,0.2)] text-xl"
                onClick={() => setMenuOpen(false)}
              >
                {planet.name}
              </Link>
            ))}
          </div>
        )}

        <Routes>
          <Route path="/" element={<Planet />} />
          <Route path="/:name" element={<Planet />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
