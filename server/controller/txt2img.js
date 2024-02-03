import axios from 'axios'


const engineId = 'stable-diffusion-v1-6';
const apiHost = 'https://api.stability.ai';
const apiKey = process.env.APIKEY || 'sk-BKUwyE5wMukal5bpq2YeypkiiMYSb1A25WhsHw3hEL13RKyb'


const requestBody = {
        height: 896,
        width: 1152,
        text_prompts: [{text: 'a paper that container , Hey type something',}],
        cfg_scale: 7,
        steps: 30,
        samples: 1,
    };
  
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

const generateImg = async (req, res) => {
    const {prompt} = req.body
    requestBody.text_prompts[0].text = prompt
    try{
        const response = await axios.post(`${apiHost}/v1/generation/${engineId}/text-to-image`,requestBody, {headers})
        const artifacts = response.data.artifacts
        res.status(200).json({SUCCESS : true, data : {artifacts}})
    }catch(error){
        console.log(error.message)
        res.status(400).json({"SUCCESS" : false})
    }
}

export default generateImg
