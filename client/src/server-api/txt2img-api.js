import axios from 'axios'

const serverOrigin = import.meta.env.VITE_SERVERORIGIN || "http://localhost:5000/demo/api/txt2img"

const getTxtToImg = async (prompt) => {
    try{
        const response = await axios.post(`${serverOrigin}/demo/api/txt2img`, {prompt}, {withCredentials : true})
        const base64Img = response.data.data.artifacts[0].base64
        return base64Img
    }catch(error){
        console.log(error.message)
    }
}

export default getTxtToImg