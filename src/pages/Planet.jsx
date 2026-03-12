import { useState } from "react";
import Data from "../../Data.json";
import { useParams } from "react-router-dom";
import Arrow from "../../public/images/arrow.png";
import Button from "../components/__atoms/Button";
import LastDiv from "../components/__atoms/LastDiv";
import Btn from "../components/__atoms/btn1";

function Planet() {
  const params = useParams();
  const newData = Data.find(
    (planet) => (params.name || "Mercury") === planet.name,
  );

  const [activeTab, setActiveTab] = useState("overview");

  const content = {
    overview: newData.overview.content,
    structure: newData.structure.content,
    geology: newData.geology.content,
  };

  const source = {
    overview: newData.overview.source,
    structure: newData.structure.source,
    geology: newData.geology.source,
  };

  return (
    <>
      <div className="flex justify-around items-center min-h-[80vh] text-white pr-4 lg:flex-col lg:min-h-[120vh] sm:pt-20 sm:min-h-[150vh]">
        <div className="relative">
          <img
            className="sm:w-[300px] sm:h=[300px]"
            src={newData.images.planet}
            alt={newData.name}
          />
          {activeTab === "structure" && (
            <img
              src={newData.images.internal}
              alt={newData.name}
              className="absolute top-0 right-0 sm:w-[50%] sm:h-[100%]"
            />
          )}
          {activeTab === "geology" && (
            <div className="relative">
              <img
                src={newData.images.div}
                alt=""
                className="absolute top-[-100px] left-30 sm:left-19 sm:top-[-90px] sm:w-[50%]"
              />
              <img
                className="absolute top-[-45px] left-[138px] rounded-full sm:w-[40%] sm:left-[94px] sm:top-[-40px] "
                src={newData.images.geology}
                alt={newData.name}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2.5 justify-start items-start max-w-[350px] lg:flex-row lg:max-w-[80%] lg:justify-center lg:items-center lg:gap-15 ">
          <div className="flex flex-col gap-2.5 justify-start items-start lg:max-w-[300px] ">
            <h1 className="text-[80px] planet_name sm:mt-28">{newData.name}</h1>
            <p className="text-[14px] font-normal leading-6.25 tracking-normal">
              {content[activeTab]}
            </p>
            <a
              className="flex gap-0.5 justify-center items-center"
              href={source[activeTab]}
              target="blank"
            >
              Source : Wikipedia
              <img className="w-[12px] h-[12px]" src={Arrow} alt="" />
            </a>
          </div>

          <div className="flex flex-col gap-4.5 justify-start items-start w-full sm:absolute sm:top-12.5 sm:flex-row  sm:border-b sm:border-[rgba(255,255,255,0.2)] ">
            <button
              onClick={() => setActiveTab("overview")}
              style={{
                backgroundColor:
                  activeTab === "overview" ? newData.color : undefined,
              }}
              className="flex items-center gap-4 px-4 py-2 border border-[rgba(255,255,255,0.2)] w-full h-[48px] hover:bg-[rgba(216,216,216,0.2)] cursor-pointer sm:border-none sm:hover:bg-transparent sm:justify-center  "
            >
              <span className="sm:hidden">01</span>
              <span>OVERVIEW</span>
            </button>
            <Button
              color={newData.color}
              onClick={() => setActiveTab("structure")}
              active={activeTab === "structure"}
              num="02"
              span="INTERNAL "
              text="STRUCTURE"
            />
            <Btn
              color={newData.color}
              onClick={() => setActiveTab("geology")}
              active={activeTab === "geology"}
              num="03"
              text="SURFACE "
              span="GEOLOGY"
            />
          </div>
        </div>
      </div>
      <footer className="flex gap-6 justify-center items-center w-full h-[100px] px-5 text-white mb-10 sm:flex-col sm: mt-30 sm:mb-50  ">
        <LastDiv num={newData.rotation} text="ROTATION TIME" />
        <LastDiv num={newData.revolution} text="REVOLUTION TIME" />
        <LastDiv num={newData.radius} text="RADIUS" />
        <LastDiv num={newData.temperature} text="AVERAGE TEMP." />
      </footer>
    </>
  );
}

export default Planet;
