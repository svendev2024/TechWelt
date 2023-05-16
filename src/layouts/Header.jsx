import { useState } from "react";

function Header() {
  const[curpage, setCurpage] = useState('Dashboard');
  return (
        <div className='header'>
          <div className='profile'>
            <div className='input-search'>
              <input type="text" placeholder='Search'/>
              <div className='search-btn' style={{cursor: "pointer"}}>
                <img src="./assets/images/divider.png" height={15} alt="divider"/>&nbsp;&nbsp;&nbsp;
                <i className="fa-solid fa-magnifying-glass" style={{color:'#C5C7CD'}}></i>&nbsp;&nbsp;
              </div>
            </div>
            <i className="fa-regular fa-bell fa-xl" style={{color: "black", cursor: "pointer"}}></i>
            <p style={{marginRight: "15px"}}><span className='badge'>3</span></p>
            <img src="./assets/images/divider.png" height={30} alt="divider"/>  
            <p className='user-name'>Andrei Zotov</p>
            <div className='avatar'>
              <img className='user-img' src="./assets/images/avatar/man/_header.png" alt="_header" />
              <img src="./assets/images/Polygon2.png"alt="Polygon2"/>
            </div>
          </div>
          <div className='navbar'>
            <button className={'nav-btn' + (curpage === "Dashboard" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Dashboard")}>
              <i className="fa-solid fa-chart-pie"></i>&nbsp;
              Dashboard
            </button>
            <button className={'nav-btn' + (curpage === "Users" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Users")}>
              <i className="fa-solid fa-chart-pie"></i>&nbsp;
              Users
            </button>
            <button className={'nav-btn' + (curpage === "Devices" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Devices")}>
              <i className="fa-solid fa-microchip"></i>&nbsp;
              Devices
            </button>
            <button className={'nav-btn' + (curpage === "Alerts" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Alerts")}>
              <i className="fa-solid fa-bell"></i>&nbsp;
              Alerts
            </button>
            <button className={'nav-btn' + (curpage === "Reports" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Reports")}>
              <i className="fa-solid fa-file-contract"></i>&nbsp;
              Reports
            </button>
            <button className={'nav-btn' + (curpage === "Rules" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Rules")}>
              <i className="fa-regular fa-newspaper"></i>&nbsp;
              Rules
            </button>
            <button className={'nav-btn' + (curpage === "Geofence" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Geofence")}>
              <i className="fa-solid fa-map-location-dot"></i>&nbsp;
              Geofence
            </button>
            <button className={'nav-btn' + (curpage === "Support" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Support")}>
              <i className="fa-solid fa-headset"></i>&nbsp;
              Support
            </button>
            <button className={'nav-btn' + (curpage === "Tickets" ? " nav-btn-active" : "")} onClick={()=>setCurpage("Tickets")}>
              <i className="fa-solid fa-gears"></i>&nbsp;
              Tickets
            </button>
          </div>
        </div>
  );
}

export default Header;
