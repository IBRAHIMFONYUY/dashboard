import React from "react";
import { X } from "lucide-react";
import notifdata from "./notif-data";

const Notifications = ({ shownotif }) => {
  return (
    <div className={`nav-notification ${shownotif ? "open" : "close"}`}>
      <div className="top-notif">You have 5 new Notifications</div>
      {notifdata.map((notif, index) => (
        <div className="notif-items" key={index}>
          <>{notif.icon}</>{" "}
          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "7px",
            }}
          >
            {notif.text}
          </div>
        </div>
      ))}
      <div className="top-notif">server</div>

      <div className="bottom-notif">
        <div className="usage-content">
          <b>CPU STORAGE</b>{" "}
        
        <div className="usage-bar" style={{marginTop:'5px'}}>
          <div
            className="users-bar"
            style={{ width: "20%", background: "rgb(51, 153, 255)" }}
          ></div>
        </div>
      </div>
      <div className="usage-content">
          <b>MEMORY USAGE</b>{" "}
        
        <div className="usage-bar" style={{marginTop:'5px'}}>
          <div
            className="users-bar"
            style={{ width: "70%", background: "rgb(255, 204, 0)" }}
          ></div>
        </div>
      </div>
      <div className="usage-content">
          <b>SSD 1 USAGE</b>{" "}
        
        <div className="usage-bar" style={{marginTop:'5px'}}>
          <div
            className="users-bar"
            style={{ width: "90%", background: "rgb(239, 55, 110)" }}
          ></div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Notifications;
