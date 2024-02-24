const express = require('express')
const {getReviews, getReview} = require('../controllers/reviews')

// Protect auth middleware
const {protect, authorize} = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')

const Review = require('../models/Review')

const router = express.Router({mergeParams: true})

router.route('/').get(
    advancedResults(Review, {
        path: 'bootcamp',
        select: 'name description',
    }),
    getReviews
)

router.route('/:id').get(getReview)

module.exports = router
