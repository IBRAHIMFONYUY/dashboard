import React from "react";
import { X } from "lucide-react";

const IconsNav=({showmail})=>{
    return(
        <div className={`nav-mail ${showmail ? 'open':'close'}`}>
        this is the left mail 
        
        </div>
    )
}
export default IconsNav;