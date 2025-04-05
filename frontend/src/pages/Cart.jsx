import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Divider,
  TextField,
} from '@mui/material'
import { useCart } from '../context/CartContext'
import { Icon } from '@mui/material'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, parseInt(newQuantity))
    }
  }

  if (cart.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Icon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }}>shopping_cart</Icon>
          <Typography variant="h4" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Looks like you haven't added any products to your cart yet.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/products"
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cart.map((item) => (
            <Card key={item.id} sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={item.image}
                      alt={item.name}
                      sx={{ objectFit: 'cover', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      {item.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        inputProps={{ min: 1 }}
                        size="small"
                        sx={{ width: 70 }}
                      />
                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon>delete</Icon>
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography>Subtotal</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>₹{getCartTotal().toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h6">Total</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">₹{getCartTotal().toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart 