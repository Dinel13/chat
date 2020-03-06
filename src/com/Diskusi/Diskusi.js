import React, { useState, useEffect } from "react";
import queryString from "query-string"; // untuk handle string dari url
import io from "socket.io-client";
import "./Diskusi.css";
import Infobar from "../Infobar/Infobar";
import Input from "../input/Input";
import Pesans from '../Pesans/Pesans'
import TextContainer from '../TextContainer/TextContainer'

let socket;

const Diskusi = ({ location }) => {
  const [nama, setNama] = useState("");
  const [ruang, setRuang] = useState("");
  const [users, setUsers] = useState("");
  const [pesan, setPesan] = useState("");
  const [pesans, setPesans] = useState([]);
  const ENDPONINT = "https://chatudin.herokuapp.com/";

  useEffect(() => {
    const { nama, ruang } = queryString.parse(location.search);
    const data = queryString.parse(location.search); // ambil dalam bentuk object

    socket = io(ENDPONINT);

    console.log(nama);
    console.log(data);
    setNama(nama);
    setRuang(ruang);

    socket.emit("gabung", { nama, ruang }, (error) => {
    //  socket.emit('gabung' , {nama , ruang}, ({ error })=> alert(error)) untuk error handling
    if(error) {
      alert(error);
    }
  });
   
  }, [ENDPONINT, location.search]); // hanya me rerener jika dua isi array berubah

  useEffect(() => {
    socket.on("pesan", pesan => {
      setPesans([...pesans, pesan]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    // unruk akhir react hook
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [pesans]); // useeffect berfungsi ketika pesans berubag

  const kirimPesan = e => {
    e.preventDefault();
    if (pesan) {
      socket.emit("kirimPesan", pesan, () => setPesan("")); //kirim lalu kosongkan pesan)
    }
  };

  console.log(pesan, pesans);

  return (
    <div className="outerContainer">
      <div className="container">
        <Infobar ruan={ruang} />
        <Pesans psns={pesans} namma={nama}/>
        <Input psn={pesan} setPsn={setPesan} krmPesan={kirimPesan} />
        
      </div>
      <TextContainer users = {users}/>
    </div>
  );
};

export default Diskusi;
