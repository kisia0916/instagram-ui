import React from 'react'
import "./UserPostMain.css"
import UserPostTopMain from './UserPostTop/UserPostTopMain'
import UserPostPhotoMain from './UserPostPhoto/UserPostPhotoMain'
import UserPostBottom from './UserPostBottom/UserPostBottom'

function UserPostMain() {
  return (
    <div className='UserPostMain'>
        <UserPostTopMain/>
        <UserPostPhotoMain/>
        <UserPostBottom/>
    </div>
  )
}

export default UserPostMain