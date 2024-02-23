const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const asyncHandler = require('../middleware/async')

// @desc    Get all users
// @route   GET /api/v1/auth/users
// @access  Private/Admin
exports.getUsers = asyncHandler(async (req, res, next, err) => {
    res.status(200).json(res.advancedResults)
})

// @desc    Get single user
// @route   GET /api/v1/auth/users/:id
// @access  Private/Admin
exports.getUser = asyncHandler(async (req, res, next, err) => {
    const user = await User.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: user,
    })
})

// @desc    Create single user
// @route   POST /api/v1/auth/users
// @access  Private/Admin
exports.createUser = asyncHandler(async (req, res, next, err) => {
    const user = await User.create(req.body)

    res.status(201).json({
        success: true,
        data: user,
    })
})

// @desc    Update single user
// @route   POST /api/v1/auth/users/:id
// @access  Private/Admin
exports.updateUser = asyncHandler(async (req, res, next, err) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        data: user,
    })
})

// @desc    Delete single user
// @route   DELETE /api/v1/auth/users/:id
// @access  Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next, err) => {
    const user = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        data: {},
    })
})
