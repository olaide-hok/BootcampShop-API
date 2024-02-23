const express = require('express')
const {
    register,
    login,
    getMe,
    forgotPassword,
    resetPassword,
    updateDetails,
    updatePassword,
} = require('../controllers/auth')

const router = express.Router()

// Protect auth middleware
const {protect} = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
// router.get('/me', protect, getMe) // same as the line below
router.route('/me').get(protect, getMe)
router.route('/forgotpassword').post(forgotPassword)
router.put('/resetpassword/:resettoken', resetPassword)
router.put('/updatedetails', protect, updateDetails)
router.put('/updatepassword', protect, updatePassword)

module.exports = router
