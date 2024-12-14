import React from 'react'
import "./BottmBarMain.css"

import homeIcon from "../../assets/home_4_fill.svg"
import searchIcon from "../../assets/search_2_line.svg"
import filmIcon from "../../assets/clapperboard_line.svg"
import chatIcon from "../../assets/chat_1_line.svg"
import myIcon from "../../assets/UserIcon/455192409_1653442242137137_5822113801079325037_n.jpg"

function BottmBarMain() {
  return (
    <div className='BottmBarMain'>
        <button className='ButtonBarButton'>
            <img src={homeIcon} className='ButtonBarButtonIcon'/>
        </button>
        <button className='ButtonBarButton'>
            <img src={searchIcon} className='ButtonBarButtonIcon'/>
        </button>
        <button className='ButtonBarButton'>
            <img src={filmIcon} className='ButtonBarButtonIcon'/>
        </button>
        <button className='ButtonBarButton'>
            <img src={chatIcon} className='ButtonBarButtonIcon'/>
        </button>
        <button className='ButtonBarButton'>
            <img src={myIcon} className='ButtonBarButtonImg'/>
        </button>
    </div>
  )
}

export default BottmBarMain