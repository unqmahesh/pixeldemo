import axios from 'axios'

const serverOrigin = import.meta.env.VITE_SERVERORIGIN || "http://localhost:5000/demo/api/txt2img"

const getTxtToImg = async (prompt, negative_prompt, aspect_ratio, seed) => {
    try{
        const response = await axios.post(`${serverOrigin}/demo/api/txt2img`,
        {prompt, negative_prompt, aspect_ratio, seed})
        const base64Img = response.data.data.image
        return base64Img
    }catch(error){
        console.log(error)
    }
}

export default getTxtToImg