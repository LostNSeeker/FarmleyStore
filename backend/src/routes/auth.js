import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Check if user exists
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create new user
    user = new User({
      username,
      email,
      password,
    })

    await user.save()

    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isSuperuser: user.isSuperuser,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Please provide both email and password',
        details: !email ? 'Email is required' : 'Password is required'
      })
    }

    console.log('Login attempt for email:', email)

    // Check if user exists
    const user = await User.findOne({ email })
    if (!user) {
      console.log('User not found for email:', email)
      return res.status(400).json({ 
        message: 'Invalid credentials',
        details: 'No user found with this email address'
      })
    }
    console.log('User found:', { email: user.email, username: user.username })

    // Check password
    const isMatch = await user.comparePassword(password)
    console.log('Password match:', isMatch)
    if (!isMatch) {
      return res.status(400).json({ 
        message: 'Invalid credentials',
        details: 'Incorrect password'
      })
    }

    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isSuperuser: user.isSuperuser,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ 
      message: 'Server error',
      details: error.message 
    })
  }
})

export default router 