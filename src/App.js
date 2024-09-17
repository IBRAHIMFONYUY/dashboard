import logo from './logo.svg';
import appstyle from'./App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Colors from './components/color';
import StickNav from './components/navbar2';
import Topography from './components/topography';
import Map from './components/map';
import LeftNav from './components/left-nav';
import IconsNav from './components/nav-main';
import LayoutList from './components/layout';
import Notifications from './components/notification';
import { useState } from 'react';


function App() {
  const[theme, settheme]=useState(false)
  const[shownav, setshownav]=useState(false)
  const[showleftnav, setshowleftnav]=useState(false)
  const[showmail, setshowmail]=useState(false)
  const[showlist, setlist]=useState(false)
  const[shownotif, setnotif]=useState(false)
    const changetheme=()=>{
        settheme(!theme)
    }
  const opennav=()=>{
    setshownav(!shownav)
   
  }
  const hidenav=()=>{
    setshownav(false)
   
  }
  const openleftnav=()=>{
    setshowleftnav(!showleftnav)
   
  }
  const hideleftnav=()=>{
    setshowleftnav(false)
   
  }
  const openmail=()=>{
    setshowmail(!showmail)
    setlist(false)
    setnotif(false)
   
  }
  const openlist=()=>{
    setlist(!showlist)
    setnotif(false)
    setshowmail(false)
   
  }
  const opennotif=()=>{
    setnotif(!shownotif)
    setshowmail(false)
    setlist(false)
  }
  
  return (
    <div className="App" >

    <div className='navbar-section' >
      
      <NavBar hidenav={hidenav} shownav={shownav} />
      
      </div>
    <div className='main-section'>
    <StickNav  opennav={opennav} openleftnav={openleftnav} openmail={openmail} openlist={openlist} opennotif={opennotif} />
    <Notifications shownotif={shownotif}/>
    <LayoutList showlist={showlist}/>
    <IconsNav  showmail={showmail}/>
    <LeftNav hideleftnav={hideleftnav} showleftnav={showleftnav} />
    <div className='section'>
    <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<Colors/>} path='/colors'/>
      <Route element={<Topography/>} path='/topography'/>
      <Route element={<Map/>} path='/map'/>
    </Routes>
    </div>
    </div>

    </div>
  );
}

export default App;
