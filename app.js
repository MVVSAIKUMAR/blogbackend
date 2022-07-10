const express = require('express')
const tourRouter = require('./route/tourism')
const techRouter = require('./route/technology')
const fitRouter = require('./route/fitness')
const foodRouter = require('./route/food')
const homeRouter = require('./route/home')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",tourRouter)
app.use("/api",techRouter)
app.use("/api",fitRouter)
app.use("/api",foodRouter)
app.use("/api",homeRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})