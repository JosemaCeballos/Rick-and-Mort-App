import React from "react";
import { useState } from "react";
import "./Characters.css";

const Characters = ({ characters = [] }) => {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="row">
      <input
        className="mb-3 form-control me-2 progress-bar bg-white"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {characters
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((item, i) => (
          <div key={i} className="col mb-4 border-0">
            <div className="card" style={{ minWidth: "200px" }}>
              <div className="title" onClick={() => toggle(i)}>
                <img
                  src={item.image}
                  alt=""
                  className="card-img-top nashemiento"
                />
              </div>
              <div className="card-boby">
                <h5 class="card-title">{item.name} - Tap to see info</h5>
                <div className={selected === i ? "content show" : "content"}>
                  <hr />
                  <div className="fs-6">
                    <p>Especies: {item.species}</p>
                    <p>Location: {item.location.name}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Origin: {item.origin.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Characters;
