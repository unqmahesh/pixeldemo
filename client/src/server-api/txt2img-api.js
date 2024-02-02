import axios from 'axios'

const serverOrigin = import.meta.env.VITE_SERVERORIGIN

const getTxtToImg = async (prompt) => {
    try{
        const response = await axios.post(serverOrigin, {prompt}, {withCredentials : true})
        const base64Img = response.data.data.artifacts[0].base64
        return base64Img
    }catch(error){
        console.log(error.message)
    }
}

export default getTxtToImg