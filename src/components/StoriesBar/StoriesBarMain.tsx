import React from 'react'
import "./StoriesBarMain.css"
import UserStoryMain from './UserStory/UserStoryMain'
import AddMyStoryMain from './AddMyStory/AddMyStoryMain'

import icon1 from "../../assets/UserIcon/pexels-athena-1758144.jpg"
import icon2 from "../../assets/UserIcon/pexels-danxavier-1239291.jpg"
import icon3 from "../../assets/UserIcon/pexels-helloaesthe-16471876.jpg"
import icon4 from "../../assets/UserIcon/pexels-justin-shaifer-501272-1222271.jpg"
import icon5 from "../../assets/UserIcon/pexels-pixabay-210019.jpg"


function StoriesBarMain() {
  return (
    <div className='StoriesBarMain'>
        <div className='StoriesBarContents'>
            <AddMyStoryMain/>
            <UserStoryMain icon = {icon1} name='fumi0916'/>
            <UserStoryMain icon = {icon2} name='pomeg'/>
            <UserStoryMain icon = {icon3} name='kisia_aaaaaaaaaaa'/>
            <UserStoryMain icon = {icon4} name='expansion'/>
            <UserStoryMain icon = {icon5} name=''/>
        </div>
    </div>
  )
}

export default StoriesBarMain