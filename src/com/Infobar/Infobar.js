import React from "react";
import OnlineIcon from '../../icons/onlineIcon.png'
import CloseIcon from '../../icons/closeIcon.png'

import "./Infobar.css";

const Infobar = ({ruan}) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
<img className="onlineIcon" src={OnlineIcon} alt="onlin icon"/>
<h3>{ruan}</h3>
    </div>
    <div className="rightInnerContainer">
        
        <a href="/"><img src={CloseIcon} alt="close icon" /></a>

    </div>
  </div>
);

export default Infobar;
