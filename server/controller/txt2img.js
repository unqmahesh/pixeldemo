import axios from 'axios'


// const engineId = 'stable-diffusion-v1-6';
// const apiHost = 'https://api.stability.ai';
const apiKey = process.env.TXT2IMGAPIKEY || 'sk-BKUwyE5wMukal5bpq2YeypkiiMYSb1A25WhsHw3hEL13RKyb'


const requestBody = {
        aspect_ratio : "16:9",
        negative_prompt : "blur",
        prompt: 'a paper that container , Hey type something',
        seed : 1
        // cfg_scale: 7,
        // steps: 30,
        // samples: 1,
    };
  
const headers = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

const generateImg = async (req, res) => {

    const {prompt, seed, negative_prompt, aspect_ratio} = req.body
    requestBody.seed = seed || Number(requestBody.seed)
    requestBody.negative_prompt = negative_prompt || requestBody.negative_prompt
    requestBody.aspect_ratio = aspect_ratio || requestBody.aspect_ratio
    requestBody.prompt = prompt || requestBody.prompt

    console.log(requestBody)

    try
    {
        const response = await axios.post('https://api.stability.ai/v2beta/stable-image/generate/core',
        requestBody,
        {headers})

        const image = response.data.image
        res.status(200).json({SUCCESS : true, data : {image}})
    }catch(error){
        console.log(error.response.data)
        res.status(400).json({"SUCCESS" : false})
    }
}

export default generateImg

// ${apiHost}/v1/generation/${engineId}/text-to-image`