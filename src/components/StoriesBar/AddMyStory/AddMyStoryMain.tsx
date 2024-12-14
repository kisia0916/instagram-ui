import React from 'react'
import "./AddMyStoryMain.css"
import myIcon from "../../../assets/UserIcon/455192409_1653442242137137_5822113801079325037_n.jpg"
import addLine from "../../../assets/add_line.svg"

function AddMyStoryMain() {
  return (
    <div className='AddMyStory'>
        <div className='AddMyStoryMainContent'>
            <div className='AddMyStoryIconSpace'>
                <img src={myIcon} className='AddMyStoryIcon'/>
                <div className='AddMyStoryAddIconWrap'>
                    <img src={addLine} className='AddMyStoryAddIcon'/>
                </div>
            </div>
            <div className='AddMyStoryTextWrap'>
                <span className='AddMyStoryText'>ストーリに追加</span>
            </div>
        </div>
    </div>
  )
}

export default AddMyStoryMain