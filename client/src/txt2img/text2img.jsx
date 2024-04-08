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
    const [style, setStyle] = useState('')

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

          setKey(value)
        }
        else if(name == "seed"){
          setSeed(value)
        }
        else{
          setStyle(value)
        }
      }

    async function handleDownloadClick(e){
    }

      async function handleSubmit(){
        setBase64Img(null)
        setLoading(true)
        const resBase64Img= await getTxtToImg(prompt, negPrompt, aspectRatio, seed, key, style)
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
            <label htmlFor='style'>Style</label>
            <select id='stlyle' name='style' onChange={handleChange} value={style}>
              <option value="3d-model">3d-model</option>
              <option value="anime">anime</option>
              <option value='cinematic'>cinematic</option>
              <option value='comic-book'>comic-book</option>
              <option value='digital-art'>digital-art</option>
              <option value='enhance '>enhance</option>
              <option value='fantasy-art'>fantasy-art</option>
              <option value='isometric'>isometric</option>
              <option value='line-art'>line-art</option>
              <option value='low-poly'>low-poly</option>
              <option value='modeling-compound'>modeling-compound</option>
              <option value='neon-punk'>neon-punk</option>
              <option value='origami'>origami</option>
              <option value='photographic'>photographic</option>
              <option value='pixel-art'>pixel-art</option>
              <option value='tile-texture'>tile-texture</option>
            </select>
            {/* <input className='style' name='style' value={style} onChange={handleChange} placeholder='Style' /> */}
            <input className='key'  name='key' value={key} onChange={handleChange} placeholder='Enter your key...'/>
            <button><a href={`data:image/png;base64,${base64Img}`} download='image.png' onClick={handleDownloadClick}>download</a></button>
            <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
      )
}

export default TxtToImg