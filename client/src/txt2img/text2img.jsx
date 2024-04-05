import react, { useState, useEffect } from 'react'
import getTxtToImg from '../server-api/txt2img-api.js'
import ImgComp from '../imgcomp/imgcomp.jsx'
import './text2img.css'

function TxtToImg() {

    const [base64Img, setBase64Img] = useState(null)
    const [prompt, setPrompt] = useState('')
    const [aspectRatio, setAspectRatio] = useState('')
    const [loading, setLoading] = useState(false)
    const [negPrompt, setNegPrompt] = useState("")
    const [seed, setSeed] = useState(0)
    const [key, setKey] = useState('')

      function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        if(name == "aspectratio"){
          console.log(value)
          setAspectRatio(value)
        }
        else if(name == "prompt"){
          setPrompt(value)
        }
        else if(name == "negPrompt"){
          setNegPrompt(value)
        }
        else if(name == "key"){
          console.log(value)
          setKey(value)
        }
        else{
          setSeed(value)
        }
      }

    async function handleDownloadClick(e){
    }

      async function handleSubmit(){
        setBase64Img(null)
        setLoading(true)
        const resBase64Img= await getTxtToImg(prompt, negPrompt, aspectRatio, seed, key)
        setLoading(false)
        setBase64Img(resBase64Img)
      }

      return(
        <>  
            <div className='txt2img'>
            {!base64Img ? (loading && <h1>Loading...</h1> ) : (<img src={`data:image/png;base64,${base64Img}`} alt='image' />)}
            <input placeholder='Enter a prompt' onChange={handleChange} value={prompt} name='prompt'/>
            <input placeholder='Negative prompt(Optional)' onChange={handleChange} value={negPrompt} name='negPrompt'/>
            <label htmlFor='seed'>Seed</label>
            <input type='range' name='seed' min='0' max='1' step='1' id='seed' value={seed} onChange={handleChange}></input>
            <label htmlFor='aspectratio'>Aspect-ratio</label>
            <select id='aspectratio' onChange={handleChange} name='aspectratio' value={aspectRatio}>
              <option value="16:9">16:9</option>
              {/* <option value="4:3">4:3</option> */}
              <option value="21:9">21:9</option>
              <option value="9:21">9:21</option>
              <option value="16:9">16:10</option>
              <option value="3:2">3:2</option>
              <option value="9:16">9:16</option>
            </select>
            <input className='key'  name='key' value={key} onChange={handleChange} placeholder='Enter you key...'/>
            <button><a href={`data:image/png;base64,${base64Img}`} download='image.png' onClick={handleDownloadClick}>download</a></button>
            <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
      )
}

export default TxtToImg