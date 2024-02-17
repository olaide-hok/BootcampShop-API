const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

//  Load env vars
dotenv.config({path: './config/config.env'})

// Connect to database
connectDB()

// Initialize App
const app = express()

// Body Parser
app.use(express.json())

// Routes files
const bootcamps = require('./routes/bootcamps')
const courses = require('./routes/courses')

// Dev logging middleware (morgan)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)
app.use('/api/v1/courses', courses)

// Express Error handler middlewware
app.use(errorHandler)

// Port to listen on
const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server connection and exit process
    server.close(() => process.exit(1))
})
