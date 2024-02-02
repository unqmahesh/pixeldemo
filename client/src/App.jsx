import React, { useEffect } from 'react'
import getTxtToImg from './server-api/txt2img-api.js'
import TxtToImg from './txt2img/text2img.jsx'
import {Route, Routes, Navigate, Link} from 'react-router-dom'
import HomePage from './Homepg/homepg.jsx'
import ImgUpScale from './imgupscale/imgupscale.jsx'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/txt2img' Component={TxtToImg} />
        <Route path='/imgupscale' Component={ImgUpScale} />
      </Routes>
    </div>
  )
}

export default App