import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";
import Cardlist from "./search";

const Ap = () => {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8008/cards").then((response) => {
      Setdata(response.data);
    });
  }, []);
  return <Header result={data} />;
};

ReactDOM.render(<Ap />, document.querySelector("#root"));
