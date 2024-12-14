import React from 'react'
import "./UserStoryMain.css"

import myIcon from "../../../assets/UserIcon/455192409_1653442242137137_5822113801079325037_n.jpg"

function UserStoryMain(props:{icon:string,name:string}) {
  return (
    <div className='UserStory'>
        <div className='UserStoryMainContent'>
            <div className='UserStoryIconSpace'>
                <div className='UserStoryIconWhiteSpace'>
                    <img src={props.icon} className='UserStoryIcon'/>
                </div>
            </div>
            <div className='UserStoryTextWrap'>
                <span className='UserStoryText'>{props.name}</span>
            </div>
        </div>
    </div>
  )
}

export default UserStoryMain