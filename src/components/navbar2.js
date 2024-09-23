import React, { useEffect, useState } from "react";
import pic3 from './p3.jpeg'
import {
    Search,
    Menu,
    Bell,
    MailOpen,
    LayoutList,
    Sun,
    LayoutGrid,
    Moon,
    X,
} from "lucide-react";
const StickNav = ({ opennav, openleftnav, openmail, openlist, opennotif }) => {
    const [theme, settheme] = useState(localStorage.getItem("theme") || "root");

    const changetheme = () => {
        const newtheme = theme === "root" ? "dark-theme" : "root";
        document.body.classList.toggle("dark-theme");
        settheme(newtheme);

        localStorage.setItem("theme", newtheme);
    };

    useEffect(() => {
        document.body.classList.add(theme);
    }, [theme]);
    return (
        <div className="stick-navbar">
            <div className="left">
                <div className="hamburger" onClick={opennav}>
                    <Menu />
                </div>
                <div className="search-bar">
                    <Search />
                    <input placeholder="search" />
                </div>
            </div>
            <div className="nav-user">
                <div className="nav-1">
                    <div className="nav-user-icons" onClick={opennotif} >
                        <Bell />
                    </div>
                    <div className="nav-user-icons" onClick={openlist}>
                        <LayoutList />
                    </div>
                    <div className="nav-user-icons" onClick={openmail}>
                        <MailOpen />
                    </div>
                </div>

                <div
                    className="nav-user-icons sun"
                    style={{ color: theme === "root" ? "" : "blue" }}
                    onClick={changetheme}
                >
                    {theme === "root" ? <Sun /> : <Moon />}
                </div>
                <div ><img src={pic3}/></div>
                <div className="nav-user-icons" onClick={openleftnav}>
                    <LayoutGrid />
                </div>
            </div>
        </div>
    );
};
export default StickNav;
