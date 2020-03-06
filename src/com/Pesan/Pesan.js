import React from "react";
import ReactEMoji from 'react-emoji'
import "./Pesan.css";

const Pesan = ({psnku: {user, text}, nma}) => {
    let isSentByThisUser = false

    const trimedNAME = nma.trim().toLowerCase()

    if (user === trimedNAME) {
        isSentByThisUser = true
    }
    return (
        isSentByThisUser ? (
            <div className="bungkusPesan justifyEnd">
                <p className="sendText pr-10" >{trimedNAME}</p>

                <div className="pesanBox backgroundBlue">
                    <p className="pesanText colorWhite">{ReactEMoji.emojify(text) }</p>
                </div>
            </div>

        ) : (
            <div className="bungkusPesan justifyStart">

            <div className="pesanBox backgroundLight">
                <p className="pesanText colorDark">{ReactEMoji.emojify(text)}</p>
            </div>
            <p className="sendText pl-10 " >{user}</p>

        </div>

        )
    )
}

export default Pesan;