import { useState, useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
  Alert,
} from '@mui/material'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { user, updateProfile, changePassword } = useAuth()
  const [activeTab, setActiveTab] = useState(0)
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    if (user?.profile) {
      setProfileData({
        firstName: user.profile.firstName || '',
        lastName: user.profile.lastName || '',
        phone: user.profile.phone || '',
        address: user.profile.address || '',
      })
    }
  }, [user])

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    })
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    try {
      const success = await updateProfile(profileData)
      if (success) {
        setMessage({ type: 'success', text: 'Profile updated successfully' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update profile' })
    }
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      return
    }
    try {
      const success = await changePassword(passwordData.currentPassword, passwordData.newPassword)
      if (success) {
        setMessage({ type: 'success', text: 'Password changed successfully' })
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to change password' })
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile Settings
        </Typography>

        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
          >
            <Tab label="Profile Information" />
            <Tab label="Change Password" />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Box component="form" onSubmit={handleProfileSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="First Name"
              name="firstName"
              value={profileData.firstName}
              onChange={handleProfileChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              name="lastName"
              value={profileData.lastName}
              onChange={handleProfileChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Phone"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Address"
              name="address"
              multiline
              rows={4}
              value={profileData.address}
              onChange={handleProfileChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Update Profile
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box component="form" onSubmit={handlePasswordSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Change Password
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  )
}

export default Profile 