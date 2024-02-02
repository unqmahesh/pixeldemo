import express from 'express'
import generateImg from '../controller/txt2img.js'
import upScaleImg from '../controller/upscaleimg.js'

const indexRouter = express.Router()

indexRouter.route('/txt2img').post(generateImg)
indexRouter.route('/upscaleimg').post(upScaleImg)


export default indexRouter