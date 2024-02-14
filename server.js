const express = require('express')
const dotenv = require('dotenv')

//  Load env vars
dotenv.config({path: './config/config.env'})

// Initialize App
const app = express()

// Port to listen on
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)
