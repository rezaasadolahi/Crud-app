const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')


//* connect to MongoDb
const connectDB = require('./server/database/connection')


//* config port - dotenv: file config.env ra seda mizane va bad process.env.PORT behesh dast resi peida mikone
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 4000

//* log request
app.use(morgan('tiny'))

//* MongoDB connection
connectDB()

//* parse request to body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//* set view engine
app.set("view engine", "ejs")

//* load assets
app.use(express.static(__dirname + '/assets'))

//* load router
app.use('/', require('./server/routes/router'))




app.listen(PORT, () => console.log(`Server is run on http://localhost:${PORT}`))