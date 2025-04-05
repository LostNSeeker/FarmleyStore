import { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const AdminPanel = () => {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    if (user?.isSuperuser) {
      fetchUsers()
    }
  }, [user])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      setUsers(response.data)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to fetch users' })
    }
  }

  const handleResetPassword = async () => {
    try {
      await axios.post(
        `/api/admin/users/${selectedUser._id}/reset-password`,
        { newPassword },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      setMessage({ type: 'success', text: 'Password reset successfully' })
      setOpenDialog(false)
      setNewPassword('')
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to reset password' })
    }
  }

  const handleMakeAdmin = async (userId) => {
    try {
      await axios.post(
        `/api/admin/users/${userId}/make-admin`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      setMessage({ type: 'success', text: 'User is now an admin' })
      fetchUsers()
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to make user admin' })
    }
  }

  if (!user?.isSuperuser) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Access Denied
        </Typography>
        <Typography>You do not have permission to access this page.</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Admin Panel
      </Typography>

      {message.text && (
        <Alert severity={message.type} sx={{ mb: 2 }}>
          {message.text}
        </Alert>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isSuperuser ? 'Admin' : 'User'}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setSelectedUser(user)
                      setOpenDialog(true)
                    }}
                    sx={{ mr: 1 }}
                  >
                    Reset Password
                  </Button>
                  {!user.isSuperuser && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleMakeAdmin(user._id)}
                    >
                      Make Admin
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleResetPassword} color="primary">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AdminPanel 