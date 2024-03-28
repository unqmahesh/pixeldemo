import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import indexRouter from './router/index-router.js'

const app = express()

app.use(cors({origin : '*'}))


app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/demo/api/', indexRouter)


export default app