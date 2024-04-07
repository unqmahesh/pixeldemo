import axios from 'axios'
import tinify from 'tinify'




// const engineId = 'stable-diffusion-v1-6';
// const apiHost = 'https://api.stability.ai';
// const apiKey = process.env.TXT2IMGAPIKEY || 'sk-BKUwyE5wMukal5bpq2YeypkiiMYSb1A25WhsHw3hEL13RKyb'



const generateImg = async (req, res) => {

    const requestBody = {
        aspect_ratio : "16:9",
        negative_prompt : "blur",
        prompt: 'a paper that container , Hey type something',
        seed : 1
    };

    const {prompt, seed, negative_prompt, aspect_ratio, apiKey} = req.body
    requestBody.seed = seed || Number(requestBody.seed)
    requestBody.negative_prompt = negative_prompt || requestBody.negative_prompt
    requestBody.aspect_ratio = aspect_ratio || requestBody.aspect_ratio
    requestBody.prompt = prompt || requestBody.prompt
  
    const headers = {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
    };


    try
    {
        const response = await axios.post('https://api.stability.ai/v2beta/stable-image/generate/core',
        requestBody,
        {headers})

        var image = response.data.image

        tinify.key = process.env.TINIFY_API_KEY
        const imgBuffer = Buffer.from(image, 'base64')

        const imgNewBuffer  = await tinify.fromBuffer(imgBuffer).toBuffer()

        const imgNewBase64 = imgNewBuffer.toString('base64')
        image = imgNewBase64

        res.status(200).json({SUCCESS : true, data : {image}})
    }catch(error){

        res.status(400).json({"SUCCESS" : false})
    }
}

export default generateImg

// ${apiHost}/v1/generation/${engineId}/text-to-image`

// import axios from 'axios'
// import fs from 'fs'

// import keywordsExtractor from '../utils/keywords-extractor.js'

// const sdImgGen = async(req, res, next) => {

//     try{
//         const SD_URL = process.env.SD_URL
//         const SD_API_KEY = process.env.SD_API_KEY


//         const {prompt, engineId, cfg_scale, height, width, steps, samples} = req.body

//         const reqUrl =  `${SD_URL}/v1/generation/${engineId || "stable-diffusion-xl-1024-v1-0"}/text-to-image`

//         const reqBody = {
//             'text_prompts' : [{'text' : prompt}],
//             'cfg_scale': cfg_scale || 7,
//             'height': Number(height) || 1024,
//             'width': Number(width) || 1024,
//             'steps': Number(steps) || 30,
//             'samples': Number(samples) || 1
//         }
        
//         const reqHeader = {
//             'Content-type': 'application/json',
//             Accept: 'application/json',
//             Authorization : `Bearer ${SD_API_KEY}`
//         }

//         const response = await axios.post(reqUrl, reqBody, {headers:reqHeader})
//         const base64Img = response.data.artifacts[0].base64

//         const imgBuffer = Buffer.from(base64Img, 'base64')
//         fs.writeFileSync('image/image.png', imgBuffer)


//         const keyWords = await keywordsExtractor(prompt, next)

//         res.status(200).json({success: true, data : {base64Img, keyWords}})
//     }
//     catch(error){
//     console.log(error.message)
//         const err = new Error()
//         err.status = error.response.status
//         err.name = error.response.data.name 
//         err.message = error.response.data.message
//         next(err)
//     }
// }

// export default sdImgGen