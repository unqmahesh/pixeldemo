import axios from 'axios'
import FormData from 'form-data'

const engineId = 'esrgan-v1-x2plus';
const apiHost = 'https://api.stability.ai';
const apiKey = process.env.APIKEY || 'sk-BKUwyE5wMukal5bpq2YeypkiiMYSb1A25WhsHw3hEL13RKyb'



async function upScaleImage(req, res) {
    console.log(req.files.image)
    const formData = new FormData();
    formData.append('image', image);
    formData.append('width', 1024);

  try {
    const response = await axios.post(`${apiHost}/v1/generation/${engineId}/image-to-image/upscale`,
        formData,
        {headers: {Accept: 'image/png',Authorization: `Bearer ${apiKey}`},
        responseType: 'arraybuffer'});
        console.log(response.data)
        console.log('Image successfully processed.');
        res.status(200).json({SUCCESS : true, data : response.data})
  } catch (error) {
    console.error(error.message);
  }
}

export default upScaleImage
