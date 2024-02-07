import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import indexRouter from './router/index-router.js'

const app = express()

const clientOrigin = process.env.CLIENTORIGIN || "http://localhost:5173"

app.use(cors({origin : '*', credentials : true}))


app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/demo/api/', indexRouter)


export default app