import React, { Component, useState } from "react";

import axios from "axios";
const a = "current";
const Cb = ({ Data }) => {
  function handleChange(id, img, n, w) {
    const daa = {
      id: id,
      imgsrc: img,
      bname: n,
      writer: w,
      value: "none",
    };
    axios.put(`http://localhost:8008/cards/${id}`, daa).then((daa) => {
      console.log(daa);
    });
  }
  function handlewant(id, img, n, w) {
    const daa = {
      id: id,
      imgsrc: img,
      bname: n,
      writer: w,
      value: "want to read",
    };
    axios.put(`http://localhost:8008/cards/${id}`, daa).then((daa) => {
      console.log(daa);
    });
  }
  function handlecurr(id, img, n, w) {
    const daa = {
      id: id,
      imgsrc: img,
      bname: n,
      writer: w,
      value: "current",
    };
    axios.put(`http://localhost:8008/cards/${id}`, daa).then((daa) => {
      console.log(daa);
    });
  }

  return (
    <>
      <section className="main-card--cointainer">
        {Data.map((curElem) => {
          const { id, imgsrc, bname, writer, value } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>

                    <h2 className="card-title"> {bname} </h2>
                    <span className="card-description subtle">{writer}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={imgsrc} alt="images" className="card-media" />
                  <div class="dropdown">
                    <span className="card-tag  subtle">+Add</span>
                    <div class="dropdown-content">
                      <button
                        onClick={() =>
                          handleChange(
                            curElem.id,
                            curElem.imgsrc,
                            curElem.bname,
                            curElem.writer
                          )
                        }
                      >
                        None
                      </button>

                      <button
                        onClick={() =>
                          handlecurr(
                            curElem.id,
                            curElem.imgsrc,
                            curElem.bname,
                            curElem.writer
                          )
                        }
                      >
                        Current Reading
                      </button>
                      <br />
                      <button
                        onClick={() =>
                          handlewant(
                            curElem.id,
                            curElem.imgsrc,
                            curElem.bname,
                            curElem.writer
                          )
                        }
                      >
                        Want to Read
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Cb;
