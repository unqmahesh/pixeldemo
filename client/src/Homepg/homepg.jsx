import React from 'react'
import './homepg.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home_page'>
        <Link to={'/txt2img'}><div className='card-one card'><h1>Text-to-image</h1></div></Link>      
        <Link to={'/imgupscale'}><div className='card-one card'><h1>Image-enhancer</h1></div></Link>
        <div className='card-one card'><h1>Avatar-generator</h1></div>
    </div>
  )
}

export default HomePage