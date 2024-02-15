const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

//  Load env vars
dotenv.config({path: './config/config.env'})

// Initialize App
const app = express()

// Routes files
const bootcamps = require('./routes/bootcamps')

// Dev logging middleware (morgan)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

// Port to listen on
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)
