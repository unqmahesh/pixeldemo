import react, { useState, useEffect } from 'react'
import getTxtToImg from '../server-api/txt2img-api.js'
import ImgComp from '../imgcomp/imgcomp.jsx'
import './text2img.css'

function TxtToImg() {

    const [base64Img, setBase64Img] = useState(null)
    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)

      function handleChange(e){
        const text = e.target.value
        setPrompt(text)
        
      }

      async function handleSubmit(){
        setBase64Img(null)
        setLoading(true)
        const resBase64Img= await getTxtToImg(prompt)
        setLoading(false)
        setBase64Img(resBase64Img)
      }

      return(
        <>  
            <div className='txt2img'>
            {!base64Img ? (loading && <h1>Loading...</h1> ) : (<img src={`data:image/png;base64,${base64Img}`} alt='image' />)}
            <input placeholder='Enter a prompt' onChange={handleChange} value={prompt} />
            <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
      )
}

export default TxtToImg