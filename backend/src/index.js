import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import bcrypt from 'bcryptjs'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Create initial superuser if not exists
const createSuperuser = async () => {
  try {
    const User = mongoose.model('User')
    console.log('Checking for existing superusers...')
    
    // Delete any existing superusers
    const deleteResult = await User.deleteMany({ 
      $or: [
        { email: 'admin@farmley.com' },
        { email: 'admin@farmleyf.com' },
        { username: 'admin' }
      ]
    })
    
    if (deleteResult.deletedCount > 0) {
      console.log(`Deleted ${deleteResult.deletedCount} existing superuser(s)`)
    }

    // Create new superuser
    console.log('Creating new superuser...')
    const newSuperuser = new User({
      username: 'admin',
      email: 'admin@farmley.com', // Using the correct email
      password: 'admin123',
      isSuperuser: true,
    })
    
    await newSuperuser.save()
    console.log('Superuser created successfully')
    console.log('User details:', {
      username: newSuperuser.username,
      email: newSuperuser.email,
      isSuperuser: newSuperuser.isSuperuser
    })
  } catch (error) {
    console.error('Error in createSuperuser:', error)
    if (error.code === 11000) {
      console.error('Duplicate key error. A user with this email or username already exists.')
    }
    throw error // Re-throw to prevent server start if superuser creation fails
  }
}

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`)
    await createSuperuser()
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}) 