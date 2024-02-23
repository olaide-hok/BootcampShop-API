const express = require('express')
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users')

// Protect auth middleware
const {protect, authorize} = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')

const User = require('../models/User')

const router = express.Router({mergeParams: true})

// All routes below line 18 and 19 will automatically use the protect and authorize middlewares. This is as against passing them in the route as arguments.
router.use(protect)
router.use(authorize('admin'))

router.route('/').get(advancedResults(User), getUsers).post(createUser)

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
