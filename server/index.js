import app from './app.js'

const port = process.env.PORT || 5000

const start = () => {
    try{
        app.listen(port, ()=>{console.log(`server is running on port ${port}`)})
    }catch(error){
        console.log("unable to run server")
        console.error(error.message)
    }
}

start()