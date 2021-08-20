import React, { useState } from "react";

import Cb from "./cd";
const Jd = (props) => {
  const [searchterm, setsearchterm] = useState("");
  const [datasearch, setdatasearch] = useState("");
  const searchText = (event) => {
    setsearchterm(event.target.value);
  };
  let data = props.results.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchterm.toString().toLowerCase())
    );
  });

  return (
    <div className="header">
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Search"
        size="50"
        value={searchterm}
        onChange={searchText.bind(this)}
      />

      <Cb Data={data} />
    </div>
  );
};
export default Jd;
