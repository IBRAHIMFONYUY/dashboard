import React from "react";
import { X } from "lucide-react";

const LayoutList=({showlist})=>{
    return(
        <div className={`nav-list ${showlist ? 'open':'close'}`}>
        this is the list
        
        </div>
    )
}
export default LayoutList;