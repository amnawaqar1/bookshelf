import React from "react";
import {
  MemoryRouter,
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Header from "./Header";
import "./index.css";

const Bookdisplay = ({ Data }) => {
  const filterItem = Data.filter((curElem) => {
    if (curElem.value === "current") {
      return curElem;
    }
  });

  const wanttoread = Data.filter((cur) => {
    if (cur.value === "want to read") {
      return cur;
    }
  });

  const cimgdisplay = filterItem.map((curElem) => {
    return (
      <li>
        <img src={curElem.imgsrc} />
      </li>
    );
  });

  const wimgdisplay = wanttoread.map((curr) => {
    return (
      <li>
        <img src={curr.imgsrc} />
      </li>
    );
  });

  return (
    <>
      <BrowserRouter>
        <NavLink to="/bookcard" className="nav">
          +Add Book
        </NavLink>

        <div>
          <div class="bookshelf">
            <h3 class="shelfheading">Currently Reading:</h3>
            <div class="book-grid">
              <>
                <ul>{cimgdisplay}</ul>
              </>
            </div>
            <div class="shelf-shadows"></div>
            <div class="shelf"></div>
          </div>
          <div class="bookshelf">
            <h3 class="shelfheading">Want to Read:</h3>
            <div class="book-grid">
              <ul>
                <li> {wimgdisplay}</li>
              </ul>
            </div>
            <div class="shelf-shadows"></div>
            <div class="shelf"></div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Bookdisplay;
