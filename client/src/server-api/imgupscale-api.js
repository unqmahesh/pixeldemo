import axios from 'axios'
import FormData from 'form-data'

const serverOrigin = import.meta.env.VITE_SERVERORIGIN 

const imgUpScale = async (image) => {
    let formData = new FormData()
    formData.append('image', image)
    try{
        console.log("image is ", image)
        console.log("and image is also", formData)
        const response = await axios.post(serverOrigin, formData, {withCredentials : true})
        const base64Img = response.data.data.artifacts[0].base64
        return base64Img
    }catch(error){
        console.log(error.message)
    }
}

export default imgUpScale