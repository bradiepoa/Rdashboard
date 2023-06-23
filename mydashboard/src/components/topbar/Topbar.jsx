import React from 'react'
import "./topbar.css"
// import { NotificationsNone,Laguage,Settingss } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Bradie</span>
            </div>
            <div className="topRight">
              {/* trying to implement icons */}
              <div className="topbarIconContainer">
                {/* <NotificationsNone /> */}
                N
                <span className='topIconBadge'>2</span>
              </div>

              <div className="topbarIconContainer">
                {/* <Laguage /> */}
                La
              </div>

              <div className="topbarIconContainer">
                {/* <Settingd /> */}
                Se
              </div>
              {/* <img className='topAvater' src="" alt='poa'> */}
            </div>
        </div>      
    </div>
  )
}
