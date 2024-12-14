import React from 'react'
import "./UserPostBottom.css"

import heartIcon from "../../../../assets/heart_line.svg"
import chatIcon from "../../../../assets/chat_3_line.svg"
import bookMarkIcon from "../../../../assets/bookmark_line.svg"
import shareIcon from "../../../../assets/send_line (1).svg"
function UserPostBottom() {
  return (
    <div className='UserPostBottom'>
        <div className='UserPostBottomContent'>
            <div className='UserPostBottomButtons'>
              <div className='UserPostBottomButtonsLeft'>
                  <img src={heartIcon} className='UserPostButtomsButtonLeft'/>
                  <img src={chatIcon} className='UserPostButtomsButtonLeft'/>
                  <img src={shareIcon} className='UserPostButtomsButtonLeft'/>

              </div>
              <div className='UserPostBottomButtonsRight'>
                <img src={bookMarkIcon} className='UserPostButtomsButtonRight'/>
              </div>
            </div>
            <div className='UserPostBottomInfo'>
              <p className='UserPostBottomInfoGoodsCounter'>いいね！36件</p>
              <span className='UserPostBottomInfoContentUserName'>fumi0916 </span><span className='UserPostBottomInfoContent'>羊の写真です見ればわかります</span>
              <p className='UserPostBottomInfoCreatedAt'>2日前</p>
            </div>
        </div>
    </div>
  )
}

export default UserPostBottom