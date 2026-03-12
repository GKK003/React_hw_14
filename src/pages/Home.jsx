import React from "react";
import { useParams } from "react-router";
import Data from "../../Data.json";

function Home() {
  const params = useParams();
  const newData = Data.find((planet) => params.name === planet.name);
  console.log(newData);

  return (
    <>
      <div>
        <img src={newData.images.planet} alt="" />
      </div>
    </>
  );
}

export default Home;
