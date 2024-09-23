import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Gauge,
  Droplet,
  Pencil,
  X,
  ChevronDown,
  ChevronUp,
  Send,
  Puzzle,
  Star,
  FileText,
  Bell,
  ChartPie,
  CalendarDays,
  SquareM,
} from "lucide-react";

const NavBar = ({ shownav, hidenav }) => {
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const handledropdown = (event) => {
    setdropdown(event.target.value);
  };
  const handledrop = () => {
    setdropdown(!dropdown);
  };
  const handledrop1 = () => {
    setdropdown1(!dropdown1);
  };
  const handledrop2 = () => {
    setdropdown2(!dropdown2);
  };
  const handledrop3 = () => {
    setdropdown3(!dropdown3);
  };
  const handledrop4 = () => {
    setdropdown4(!dropdown4);
  };

  return (
    <div className={`navbar ${shownav ? "open" : "close"}`}>
      <div className="navbar-head">
       CORE UI
      {/* <svg width="125" height="50" viewBox="0 0 125 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6917 22.2496H0V13.6048H22.1079V49.8135H11.6917V22.2496Z" fill="#88F0E5"/>
        <path d="M31.6025 49.7427V31.6029H42.3022V49.7427H31.6025Z" fill="#88F0E5"/>
        <path d="M32.8794 27.3514H41.3824V28.556C41.3824 29.2995 40.7797 29.9023 40.0361 29.9023H34.2257C33.4822 29.9023 32.8794 29.2995 32.8794 28.556V27.3514Z" fill="#88F0E5"/>
        <path d="M36.03 16.7052L33.9042 25.7042C31.977 25.8176 31.1171 23.9092 30.9281 22.9408L30.7155 20.319C31.2257 18.9585 28.9914 15.2172 27.8104 13.5166C26.4499 10.002 27.7159 6.14729 28.519 4.65926C31.0699 0.351058 36.1953 -0.206363 38.4392 0.053452C42.0671 0.223513 45.0054 3.80895 46.0211 5.58042C46.6446 6.54409 46.8005 9.52488 46.8005 10.8948C46.6304 12.9922 45.3125 15.3117 44.6747 16.2092C43.7111 17.2862 43.3284 19.1144 43.2576 19.8938C43.2576 19.8938 43.1866 22.1079 43.0449 22.8165C42.9032 23.525 42.1237 24.4636 41.0609 25.0839C39.998 25.7042 38.2266 25.7042 38.2266 25.7042L40.6358 13.304H38.2266L39.5021 5.58042L33.0539 16.7052H36.03Z" fill="#88F0E5"/>
        <path d="M79.0511 14.6666V24.6577C75.3098 22.5603 71.5401 21.847 70.1229 21.7525C57.5951 21.9792 58.1951 31.2475 60.061 35.8533C65.1061 43.9028 75.0594 40.3883 79.4054 37.6248V47.7575C78.6118 48.211 74.3981 49.2692 72.3904 49.7416C49.659 50.762 47.4718 34.2 49.2197 25.7914C55.9087 9.35223 71.8944 11.5252 79.0511 14.6666Z" fill="#88F0E5"/></svg>SUMMIT */}
        <div className="hamburger" onClick={hidenav}>
          <X />
        </div>
      </div>
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
          <div className="nav-bar-links-down">
            <div className="nav-links ">
              {" "}
              <Puzzle /> <span>Base</span>
            </div>{" "}
            <div className="down">
              {dropdown ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        <div className={` dropdown-cnt ${dropdown ? "open" : "close"}`}>
          <Link className="dropdown">link1</Link>
          <Link className="dropdown">link2</Link>

          <hr />
        </div>
        <div className="navbar-links" onClick={handledrop1}>
          <div className="nav-bar-links-down">
            <div className="nav-links ">
              {" "}
              <Send /> <span>Buttons</span>
            </div>{" "}
            <div className="down">
              {dropdown1 ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        <div className={` dropdown-cnt ${dropdown1 ? "open" : "close"}`}>
          <Link className="dropdown">link1</Link>
          <Link className="dropdown">link2</Link>

          <hr />
        </div>
        <div className="navbar-links" to={"/topography"} onClick={handledrop2}>
          <div className="nav-bar-links-down">
            <div className="nav-links ">
              {" "}
              <FileText /> <span>Forms</span>
            </div>{" "}
            <div className="down">
              {dropdown2 ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        <div className={` dropdown-cnt ${dropdown2 ? "open" : "close"}`}>
          <Link className="dropdown">link1</Link>
          <Link className="dropdown">link2</Link>

          <hr />
        </div>
        <div className="navbar-links" to={"/topography"} onClick={handledrop3}>
          <div className="nav-bar-links-down">
            <div className="nav-links ">
              {" "}
              <Star /> <span>Icons</span>
            </div>{" "}
            <div className="down">
              {dropdown3 ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        <div className={` dropdown-cnt ${dropdown3 ? "open" : "close"}`}>
          <Link className="dropdown">link1</Link>
          <Link className="dropdown">link2</Link>

          <hr />
        </div>
        <div className="navbar-links" to={"/topography"} onClick={handledrop4}>
          <div className="nav-bar-links-down">
            <div className="nav-links ">
              {" "}
              <Bell /> <span>Notifications</span>
            </div>{" "}
            <div className="down">
              {dropdown4 ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </div>

        <div className={` dropdown-cnt ${dropdown4 ? "open" : "close"}`}>
          <Link className="dropdown">link1</Link>
          <Link className="dropdown">link2</Link>

          <hr />
        </div>
        <div className="separetor">PLUGINS</div>
        <Link className="navbar-links" to={"/colors"}>
          <CalendarDays /> <span>Carlendar</span>
        </Link>
        <Link className="navbar-links" to={"/charts"}>
          <ChartPie /> <span>Charts</span>
        </Link>
        <Link className="navbar-links" to={"/map"}>
          <SquareM /> <span>Google Map</span>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
