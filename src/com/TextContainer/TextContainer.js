import React from 'react'

import './TextContainer.css'

import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({user}) =>  (
    <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      user
        ? (
          <div>
            <h1>Teman yang aktif:</h1>
            <div className="activeContainer">
              <h2>
                {user.map(({nama}) => (
                  <div key={nama} className="activeItem">
                    {nama}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
    );

export default TextContainer
