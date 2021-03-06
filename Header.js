import React from "react";

import "./index.css";
import Bookdisplay from "./Shelf";

const Header = (props) => {
  return (
    <div>
      <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" />
      <header>
        <h1>
          My <span>Reads</span>
        </h1>
      </header>
      <main>
        {" "}
        <Bookdisplay Data={props.result} />{" "}
      </main>
    </div>
  );
};
export default Header;
