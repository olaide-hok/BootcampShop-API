const express = require('express')
const {register, login, getMe} = require('../controllers/auth')

const router = express.Router()

// Protect auth middleware
const {protect} = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
// router.get('/me', protect, getMe) // same as the line below
router.route('/me').get(protect, getMe)

module.exports = router
