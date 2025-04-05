import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
  Badge,
  Container,
  Avatar,
} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { styled, alpha } from '@mui/material/styles'
import { useState } from 'react'
import { Icon } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const { cart } = useCart()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  // Add debug logging
  console.log('Navbar - User:', user)
  console.log('Navbar - Is Superuser:', user?.isSuperuser)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
    handleClose()
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ]

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, mr: { md: 2 } }}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="Farmley Logo"
              sx={{
                height: '40px',
                width: 'auto',
                marginRight: '10px',
                display: 'block',
              }}
            />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                display: { xs: 'none', sm: 'block' },
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Farmley
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  mx: 1,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Cart and Auth Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              sx={{ color: 'text.primary' }}
              component={RouterLink}
              to="/cart"
            >
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isAuthenticated ? (
              <>
                <IconButton
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    '& .MuiPaper-root': {
                      borderRadius: 2,
                      mt: 1.5,
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      onClick={handleClose}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <MenuItem
                    component={RouterLink}
                    to="/cart"
                    onClick={handleClose}
                  >
                    Cart
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/profile"
                    onClick={handleClose}
                  >
                    Profile
                  </MenuItem>
                  {user?.isSuperuser && (
                    <MenuItem
                      component={RouterLink}
                      to="/admin"
                      onClick={handleClose}
                      sx={{ color: 'primary.main', fontWeight: 'bold' }}
                    >
                      Admin Panel
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{ 
                    ml: 2,
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  mt: 1.5,
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleClose}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem
                component={RouterLink}
                to="/cart"
                onClick={handleClose}
              >
                Cart
              </MenuItem>
              {isAuthenticated ? (
                [
                  <MenuItem
                    key="profile"
                    component={RouterLink}
                    to="/profile"
                    onClick={handleClose}
                  >
                    Profile
                  </MenuItem>,
                  user?.isSuperuser && (
                    <MenuItem
                      key="admin"
                      component={RouterLink}
                      to="/admin"
                      onClick={handleClose}
                      sx={{ color: 'primary.main', fontWeight: 'bold' }}
                    >
                      Admin Panel
                    </MenuItem>
                  ),
                  <MenuItem key="logout" onClick={handleLogout}>
                    Logout
                  </MenuItem>
                ]
              ) : (
                [
                  <MenuItem
                    key="login"
                    component={RouterLink}
                    to="/login"
                    onClick={handleClose}
                  >
                    Login
                  </MenuItem>,
                  <MenuItem
                    key="register"
                    component={RouterLink}
                    to="/register"
                    onClick={handleClose}
                  >
                    Register
                  </MenuItem>
                ]
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 