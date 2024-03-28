import axios from 'axios'
import FormData from 'form-data'

const serverOrigin = import.meta.env.VITE_SERVERORIGIN 

const imgUpScale = async (image) => {
    let formData = new FormData()
    formData.append('image', image)
    try{
        const response = await axios.post(`${serverOrigin}/demo/api/upscaleimg`, formData)
        const base64Img = response.data.data
        return base64Img
    }catch(error){
        console.log(error.message)
    }
}

export default imgUpScale