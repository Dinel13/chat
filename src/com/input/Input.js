import React from "react";
import './Input.css'

const Input = ({psn, setPsn, krmPesan}) => (
  <div>
    <input
      className="input"
      type="text"
      value={psn}
      placeholder="Tulis pesan disini"
      onChange={event => setPsn(event.target.value)}
      onKeyPress={e => (e.key === "enter" ? krmPesan(e) : null)}
    ></input>
    <button className="sendButton" onClick={(event)=> krmPesan(event)}>Kirim</button>
  </div>
);
export default Input;
