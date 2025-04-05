import express from 'express'
import User from '../models/User.js'
import adminAuth from '../middleware/adminAuth.js'

const router = express.Router()

// Get all users (admin only)
router.get('/users', adminAuth, async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Reset user password (admin only)
router.post('/users/:id/reset-password', adminAuth, async (req, res) => {
  try {
    const { newPassword } = req.body

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' })
    }

    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Set the new password - the User model's pre-save hook will handle hashing
    user.password = newPassword
    await user.save()

    res.json({ message: 'Password reset successfully' })
  } catch (error) {
    console.error('Password reset error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Make user admin (superuser only)
router.post('/users/:id/make-admin', adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    user.isSuperuser = true
    await user.save()

    res.json({ message: 'User is now an admin' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router 