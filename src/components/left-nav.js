import React from "react";
import { X } from "lucide-react";

const LeftNav=({showleftnav, hideleftnav})=>{
    return(
        <div className={`left-nav ${showleftnav ? 'open':'close'}`} >
        this is the left nav bar
        <div className="" onClick={hideleftnav} ><X/></div>
        </div>
    )
}
export default LeftNav