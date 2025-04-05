import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      fetchUserProfile()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/api/users/profile')
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (error) {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password })
      const { token, user } = response.data
      console.log('Login response - User:', user)
      console.log('Login response - Is Superuser:', user.isSuperuser)
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(user)
      setIsAuthenticated(true)
      toast.success('Login successful!')
      return true
    } catch (error) {
      console.error('Login error:', error)
      toast.error(error.response?.data?.message || 'Login failed')
      return false
    }
  }

  const register = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(user)
      setIsAuthenticated(true)
      toast.success('Registration successful!')
      return true
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed')
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
    setIsAuthenticated(false)
    toast.success('Logged out successfully')
  }

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put('/api/users/profile', profileData)
      setUser(response.data)
      toast.success('Profile updated successfully')
      return true
    } catch (error) {
      toast.error(error.response?.data?.message || 'Profile update failed')
      return false
    }
  }

  const changePassword = async (currentPassword, newPassword) => {
    try {
      await axios.put('/api/users/change-password', {
        currentPassword,
        newPassword,
      })
      toast.success('Password changed successfully')
      return true
    } catch (error) {
      toast.error(error.response?.data?.message || 'Password change failed')
      return false
    }
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 