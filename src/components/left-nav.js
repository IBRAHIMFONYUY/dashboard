import React, { useState } from "react";
import { X, MessageSquareMore, Settings, List } from "lucide-react";

const LeftNav = ({ showleftnav, hideleftnav }) => {
    const[leftlist, setleftlist]=useState(true)
    const[leftmessage, setleftmessage]=useState(false)
    const[leftsettings, setleftsettings]=useState(false)
    const showleftlist=()=>{
        setleftlist(true)
        setleftmessage(false)
        setleftsettings(false)
    }
    const showleftmessage=()=>{
        setleftmessage(true)
        setleftlist(false)
        setleftsettings(false)
    }
    const showleftsettings=()=>{
        setleftmessage(false)
        setleftlist(false)
        setleftsettings(true)
    }
  return (
    <div className={`left-nav ${showleftnav ? "open" : "close"}`}>
      <div className="left-nav-head">
        <div className="left-nav-head-icons">
          <div className="left-icon" onClick={showleftlist} style={{color: leftlist ? 'blue':'', borderBottom:leftlist ? ' 3px solid blue':'',}} >
            <List />
          </div>
          <div className="left-icon" onClick={showleftmessage} style={{color: leftmessage ? 'blue':'', borderBottom:leftmessage ? ' 3px solid blue':'',}}>
            <MessageSquareMore  />
          </div>
          <div className="left-icon" onClick={showleftsettings} style={{color: leftsettings? 'blue':'', borderBottom:leftsettings ? ' 3px solid blue':'',}}>
            <Settings  />
          </div>
        </div>
        <div className="" onClick={hideleftnav}>
          <X />
        </div>
      </div>
      <div
        className="top-notif"
        style={{
          height: "30px",
          textAlign: "center",
          fontSize: "20px",
          alignItems: "center",
        }}
      >
        TODAY
      </div>
      <div className={`left-nav-content ${leftlist ? 'open':'close'}`}>
        left list
      </div>
      <div className={`left-nav-content ${leftmessage ? 'open':'close'}`}>
        left message
      </div>
      <div className={`left-nav-content ${leftsettings ? 'open':'close'}`}>
        left Settings
      </div>
    </div>
  );
};
export default LeftNav;
