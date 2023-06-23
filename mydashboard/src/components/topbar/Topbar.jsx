import React from 'react'
import "./topbar.css"
// import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Bradie</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                {/* <NotificationsNone /> */}
                N
                <span className='topIconBadge'>2</span>
              </div>
            </div>
        </div>      
    </div>
  )
}
