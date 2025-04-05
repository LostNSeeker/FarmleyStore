import express from 'express'
import User from '../models/User.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

// Get user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Update user profile
router.put('/me', auth, async (req, res) => {
  try {
    const { username, email } = req.body
    const user = await User.findById(req.user.id)

    if (username) user.username = username
    if (email) user.email = email

    await user.save()
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router 