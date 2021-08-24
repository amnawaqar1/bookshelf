import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Jd from "./api";

const Cardlist = () => {
  const [cardsdata, Setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8008/cards").then((response) => {
      Setdata(response.data);
    });
  }, []);

  return <Jd cards={cardsdata} />;
};
export default Cardlist;
