import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPanel from './pages/AdminPanel'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Box } from '@mui/material'
import Profile from './pages/Profile'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminPanel />
                      </AdminRoute>
                    }
                  />
                </Routes>
              </Box>
              <Footer />
              <ToastContainer />
            </Box>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App 