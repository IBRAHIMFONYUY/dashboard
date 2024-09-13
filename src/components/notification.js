import React from "react";
import { X } from "lucide-react";

const Notifications=({shownotif})=>{
    return(
        <div className={`nav-notification ${shownotif ? 'open':'close'}`}>
        this is the Notifications
        
        </div>
    )
}
export default Notifications;