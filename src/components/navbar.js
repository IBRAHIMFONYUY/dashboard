import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Gauge, Droplet, Pencil, X, ChevronDown,ChevronUp, Send, Puzzle,Star, FileText, Bell, ChartPie, CalendarDays, SquareM } from "lucide-react"


const NavBar=({shownav, hidenav})=>{
    const[dropdown, setdropdown]=useState(false)
    const[dropdown1, setdropdown1]=useState(false)
    const[dropdown2, setdropdown2]=useState(false)
    const[dropdown3, setdropdown3]=useState(false)
    const[dropdown4, setdropdown4]=useState(false)
    const handledropdown=(event)=>{
        setdropdown(event.target.value)

    }
    const handledrop=()=>{
        setdropdown(!dropdown)
    }
    const handledrop1=()=>{
        setdropdown1(!dropdown1)
    }
    const handledrop2=()=>{
        setdropdown2(!dropdown2)
    }
    const handledrop3=()=>{
        setdropdown3(!dropdown3)
    }
    const handledrop4=()=>{
        setdropdown4(!dropdown4)
    }
    
    
    return(
        
        <div className={`navbar ${shownav ? 'open':'close'}`}  >
            <div className="navbar-head">CORE UI<div className="hamburger" onClick={hidenav} ><X /></div></div>
        <div className="links">
            <Link className="navbar-links" to={"/"}>
            <Gauge /> <span>Dasboard</span>
            </Link>
            <div className="separetor">THEME</div>
            <Link className="navbar-links" to={"/colors"}>
            <Droplet /> <span>Color</span>
            </Link>
            <Link className="navbar-links" to={"/topography"}>
            <Pencil /> <span>Topography</span>
            </Link>
            <div className="separetor">COMPONENTS</div>
            <div className="navbar-links" onClick={handledrop}>
            <div className="nav-bar-links-down"><div className="nav-links"> <Puzzle /> <span>Base</span></div> <div className="down">{dropdown ? <ChevronUp/>:<ChevronDown/>}</div></div>
            </div>
            
                <div className={` dropdown-cnt ${dropdown ? 'open':'close'}`}>
                <Link className="dropdown">link1</Link>
                <Link className="dropdown">link2</Link>
                
                <hr/>
                </div>
            <div className="navbar-links" onClick={handledrop1}>
            <div className="nav-bar-links-down"><div className="nav-links"> <Send /> <span>Buttons</span></div> <div className="down">{dropdown1 ? <ChevronUp/>:<ChevronDown/>}</div></div>
            </div>
            
                <div className={` dropdown-cnt ${dropdown1 ? 'open':'close'}`}>
                <Link className="dropdown">link1</Link>
                <Link className="dropdown">link2</Link>
                
                <hr/>
                </div>
                <div className="navbar-links" to={"/topography"} onClick={handledrop2}>
                <div className="nav-bar-links-down"><div className="nav-links"> <FileText/> <span>Forms</span></div> <div className="down">{dropdown2 ? <ChevronUp/>:<ChevronDown/>}</div></div>
            </div>
            
                <div className={` dropdown-cnt ${dropdown2 ? 'open':'close'}`}>
                <Link className="dropdown">link1</Link>
                <Link className="dropdown">link2</Link>
                
                <hr/>
                </div>
                <div className="navbar-links" to={"/topography"} onClick={handledrop3}>
                <div className="nav-bar-links-down"><div className="nav-links"> <Star /> <span>Icons</span></div> <div className="down">{dropdown3 ? <ChevronUp/>:<ChevronDown/>}</div></div>
            </div>
            
                <div className={` dropdown-cnt ${dropdown3 ? 'open':'close'}`}>
                <Link className="dropdown">link1</Link>
                <Link className="dropdown">link2</Link>
                
                <hr/>
                </div>
                <div className="navbar-links" to={"/topography"} onClick={handledrop4}>
                <div className="nav-bar-links-down"><div className="nav-links"> <Bell /> <span>Notifications</span></div> <div className="down">{dropdown4 ? <ChevronUp/>:<ChevronDown/>}</div></div>
            </div>
            
                <div className={` dropdown-cnt ${dropdown4 ? 'open':'close'}`}>
                <Link className="dropdown">link1</Link>
                <Link className="dropdown">link2</Link>
                
                <hr/>
                </div>
                <div className="separetor">PLUGINS</div>
                <Link className="navbar-links" to={"/colors"}>
                <CalendarDays /> <span>Carlendar</span>
                </Link>
                <Link className="navbar-links" to={"/colors"}>
                <ChartPie /> <span>Charts</span>
                </Link>
                <Link className="navbar-links" to={"/map"}>
                <SquareM /> <span>Google Map</span>
                </Link>
        </div>
        
        </div>
        
        
        
    )
}
export default NavBar