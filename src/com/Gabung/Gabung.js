import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Gabung.css";

const Gabung = () => {
  const [nama, setName] = useState("");
  const [ruang, setRuang] = useState("");

  return (
    <div className="GabungOutContainer">
      <div className="GabungInContainer">
        <h1 className="heading">Gabung</h1>
        <div>
          <input
            className="GabungInput"
            placeholder="nama"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="GabungInput mt-20"
            placeholder="ruang"
            type="text"
            onChange={e => setRuang(e.target.value)}
          />
        </div>
        <Link
          onClick={event => (!nama || !ruang ? event.preventDefault() : null)}
          to={`/diskusi?nama=${nama}&ruang=${ruang}`}
        >
          <button className="button mt-20" type="submit">
            Masuk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gabung;
