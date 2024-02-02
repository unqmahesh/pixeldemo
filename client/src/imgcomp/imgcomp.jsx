import React from 'react'
import './imgcomp.css'

const ImgComp = (props) => {
  return (
    <div>
    <img src={`data:image/png;base64,${props.base64Img}`} alt='image' />
    </div>
  )
}

export default ImgComp