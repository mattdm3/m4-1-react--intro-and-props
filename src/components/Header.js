import React from "react";

import "./Header.css";


function Header(props) {
  return (
    <header>
      <div className="avatar-container">
        {props.participants
          .filter(user => user !== props.currentUser)
          .map(user => {
            return (
              <div className="avatar-comp">
                <img className="header-avatar" src={user.avatar} alt="" />
                <p className="userName">{user.username}</p>
              </div>

            )
          })}

      </div>


    </header>
  )
}


export default Header;
