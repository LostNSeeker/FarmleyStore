import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated || !user?.isSuperuser) {
    return <Navigate to="/" replace />
  }

  return children
}

export default AdminRoute 