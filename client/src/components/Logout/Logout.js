import React, { useState, component, useEffect } from "react";
import "./style.css";
import Axios from "axios";

function LogoutUser(props) {
  const userObj = JSON.stringify(localStorage.getItem("user"));
  useEffect(() => {
    console.log("logout");
    Axios({
      method: "POST",
      data: {
        user: userObj,
      },

      url: "/users/logout",
    });
    console.log("logout then");
    localStorage.clear();
    window.location.href = "/";
  });
  return (
    <div className="padding">
      <h1 className="goodbye"> Good Bye</h1>
    </div>
  );
}

export default LogoutUser;
