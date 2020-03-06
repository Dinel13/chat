import React from "react";
import "./Pesans.css";
import ScroolTOBottom from 'react-scroll-to-bottom'
import Pesan from '../Pesan/Pesan'

const Pesans = ({psns, namma}) => (
  <ScroolTOBottom className="messages"> 
    {psns.map((psn, i) => (
      <div key={i}>
        <Pesan psnku={psn} nma={namma} />
      </div>
    ))}
  </ScroolTOBottom>
);

export default Pesans;
