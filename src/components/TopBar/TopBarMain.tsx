import React from 'react'
import "./TopBarMain.css"
import addIcon from "../../assets/add_square_line.svg"
import heartIcon from "../../assets/heart_line.svg"

function TopBarMain() {
  return (
    <div className='TopBarMain'>
        <div className='TopBarMainContents'>
            <div className='TopBarLeft'>
                <span className='TopBarServiceLogo'>Instagram</span>
            </div>
            <div className='TopBarRight'>
                <div className='TopBarIconWrap'>
                    <img src={addIcon} className='TopBarIcon'/>
                </div>
                <div className='TopBarIconWrap'>
                    <img src={heartIcon} className='TopBarIcon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBarMain