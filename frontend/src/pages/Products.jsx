import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Tabs,
  Tab,
  Rating,
  CardActions,
  Divider,
  Icon,
  Snackbar,
  Alert,
} from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useCart } from '../context/CartContext'

const CategoryTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  fontWeight: 500,
  marginRight: theme.spacing(4),
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}))

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}))

const Products = () => {
  const [category, setCategory] = useState('all')
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })
  const { addToCart } = useCart()

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'nuts', label: 'Nuts' },
    { value: 'seeds', label: 'Seeds' },
    { value: 'dried-fruits', label: 'Dried Fruits' },
    { value: 'gift-boxes', label: 'Gift Boxes' },
  ]

  const products = [
    {
      id: 1,
      name: 'Plain Cashews',
      category: 'nuts',
      price: '₹599',
      rating: 4.8,
      image: '/images/products/plain-cashews.jpg',
      description: 'Handpicked, premium-quality cashews with a natural creamy taste.',
      weight: '500g',
    },
    {
      id: 2,
      name: 'Salted Cashews',
      category: 'nuts',
      price: '₹649',
      rating: 4.7,
      image: '/images/products/salted-cashews.jpg',
      description: 'Deliciously roasted cashews with a light touch of salt for the perfect snack.',
      weight: '500g',
    },
    {
      id: 3,
      name: 'Premium Almonds',
      category: 'nuts',
      price: '₹799',
      rating: 4.9,
      image: '/images/products/almonds.jpg',
      description: 'Crunchy and nutritious, perfect for snacking.',
      weight: '500g',
      comingSoon: true,
    },
    {
      id: 4,
      name: 'Golden Raisins',
      category: 'dried-fruits',
      price: '₹299',
      rating: 4.6,
      image: '/images/products/raisins.jpg',
      description: 'Naturally sweet and a great energy booster.',
      weight: '250g',
      comingSoon: true,
    },
  ]

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category)

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setSnackbar({
      open: true,
      message: `${product.name} added to cart!`,
    })
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Explore our carefully curated selection of premium dry fruits, sourced directly from trusted farmers.
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Box sx={{ mb: 6 }}>
        <Tabs
          value={category}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '3px',
            },
          }}
        >
          {categories.map((cat) => (
            <CategoryTab key={cat.value} value={cat.value} label={cat.label} />
          ))}
        </Tabs>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    {product.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={product.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.rating})
                  </Typography>
                </Box>
                <Chip 
                  label={product.weight} 
                  size="small" 
                  sx={{ mr: 1 }}
                />
                {product.comingSoon && (
                  <Chip 
                    label="Coming Soon" 
                    color="secondary" 
                    size="small"
                  />
                )}
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                <Button 
                  variant="outlined" 
                  size="small"
                >
                  View Details
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Icon>shopping_cart</Icon>}
                  disabled={product.comingSoon}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </ProductCard>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Products 