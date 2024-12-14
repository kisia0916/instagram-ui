import React from 'react'
import "./UserPostTopMain.css"

import myIcon from "../../../../assets/UserIcon/455192409_1653442242137137_5822113801079325037_n.jpg"
import moreIcon from "../../../../assets/more_1_fill.svg"
function UserPostTopMain() {
  return (
    <div className='UserPostTopMain'>
        <div className='UserPostTopContent'>
            <div className='UserPostTopLeft'>
                <img src={myIcon} className='UserPostTopUserIcon'/>
                <div className='UserPostTopTexts'>
                    <p className='UserPostTopNameText'>fumi_fumi_0916</p>
                    <p className='UserPostTopNameInfo'>オリジナル音源</p>
                </div>
            </div>
            <div className='UserPostTopRight'>
                <img src={moreIcon} className='UserPostTopMoreIcon'/>
            </div>
        </div>
    </div>
  )
}

export default UserPostTopMain