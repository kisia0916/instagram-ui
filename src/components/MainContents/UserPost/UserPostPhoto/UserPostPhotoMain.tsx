import React from 'react'
import "./UserPostPhotoMain.css"

import nextIcon from "../../../../assets/right_line.svg"
import photo from "../../../../assets/UserIcon/silas-schneider-e9pUVc_yfNs-unsplash.jpg"
function UserPostPhotoMain() {
  return (
    <div className='UserPostPhotoMain'>
        <img src={photo} className='UserPostPhotoImg'/>
        <button className='UserPostPhotoNextButton'>
            <img src={nextIcon} className='UserPostPhotoNextButtonText'/>
        </button>
    </div>
  )
}

export default UserPostPhotoMain