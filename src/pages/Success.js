import React, { useState } from "react";

import "../App.css";

function Success() {
 
  return (
    <div>
    <div className="bg-image">
      <div className="form-container" style={{textAlign: "center"}}>
        <h2 style={{ marginBottom: "2rem" }}>
         Congrats!! You have Registered Successfully
        </h2>
        <h3>Kindly sign up for the contest in <a className=" hackerrank" href="https://www.hackerrank.com/ssdc-recruitment24">Hackerrank</a></h3>
        <h3>Join our <a className=" whatsapp" href="https://chat.whatsapp.com/IuLJV0FNTey5yk7t15QI5p">WhatsApp</a> Group for further updates</h3>
        
      </div>
      </div>
    </div>
  );
}

export default Success;
