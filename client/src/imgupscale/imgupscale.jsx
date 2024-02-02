import react, { useState, useEffect } from 'react'
import './imgupscale.css'
import imgUpScale from '../server-api/imgupscale-api.js'


function ImgUpScale() {

    const [base64Img, setBase64Img] = useState(null)
    const [image, setImage] = useState(undefined)
    const [loading, setLoading] = useState(false)

      function handleChange(e){
        const image = e.target.files[0]
        setImage(image)   
      }

      async function handleSubmit(){
        setBase64Img(null)
        setLoading(true)
        console.log(image)
        const resBase64Img= await imgUpScale(image)
        setLoading(false)
        setBase64Img(resBase64Img)
      }

      return(
        <>  
            <div className='imgupscale'>
            {!base64Img ? (loading && <h1>Loading...</h1> ) : (<ImgComp base64Img = {base64Img} />)}
            <input  onChange={handleChange} type='file' accept='image/*' />
            <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
      )
}

export default ImgUpScale