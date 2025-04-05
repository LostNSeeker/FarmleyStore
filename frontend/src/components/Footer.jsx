import { Box, Container, Typography, Link, Grid, Icon } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Farmley
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Premium dry fruits and nuts, sourced directly from trusted farmers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/products" color="inherit" underline="hover">
                Products
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@farmley.com
              <br />
              Phone: +91 1234567890
              <br />
              Address: 123 Farmley Street, City, Country
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <Icon>facebook</Icon>
              </Link>
              <Link href="#" color="inherit">
                <Icon>instagram</Icon>
              </Link>
              <Link href="#" color="inherit">
                <Icon>twitter</Icon>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Farmley. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 