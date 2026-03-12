import React from "react";
import { useParams } from "react-router";
import Data from "../../../../Data.json";

function Contacts() {
  const params = useParams();
  const newData = Data.find((planet) => params.name === planet.name);
  console.log(newData);

  return <div>{newData.name}</div>;
}

export default Contacts;
