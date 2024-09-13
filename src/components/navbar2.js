import React, { useEffect, useState } from "react";
import { Search, Menu, Bell, MailOpen, LayoutList, Sun, LayoutGrid, Moon, X } from "lucide-react";
const StickNav=({opennav, openleftnav, openmail, openlist, opennotif })=>{
    const[theme, settheme]=useState(false)
    
    const changetheme=(color)=>{
        settheme(!theme)
        
    }
    useEffect(()=>{
        if(theme){
            document.body.classList.add('dark-theme')
        }else{
            document.body.classList.remove('dark-theme')
        }
    },[theme])
    return(
        <div className="stick-navbar">
            <div className="left">
                <div className="hamburger"  onClick={opennav}><Menu/></div>
            <div className="search-bar" ><Search /><input  placeholder="search"/></div>
            </div>
            <div className="nav-user">
                <div className="nav-1">
                    <div className="nav-user-icons" onClick={opennotif}><Bell/></div>
                    <div className="nav-user-icons" onClick={openlist}><LayoutList/></div>
                    <div className="nav-user-icons" onClick={openmail}><MailOpen/></div>
                </div>
                

                <div className="nav-user-icons sun" style={{color: theme ? 'blue':'',
                    
                }} onClick={changetheme}>{theme ? <Moon/>:<Sun/>}</div>
                <div className="nav-user-icons" onClick={openleftnav}><LayoutGrid/></div>
            </div>
            
        </div>
    )
}
export default StickNav