import express from 'express'
const app = express()
const port = process.env.PORT||4000
app.use(express.static('dist'))
app.listen(port,()=>console.log(`Now browse to localhost:${port}`))
