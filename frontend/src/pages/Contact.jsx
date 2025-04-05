import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Icon,
} from '@mui/material'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We're here to help with any questions you may have about our products or services.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Icon sx={{ mr: 2, color: 'primary.main' }}>location_on</Icon>
                <Box>
                  <Typography variant="subtitle1">Address</Typography>
                  <Typography variant="body2" color="text.secondary">
                    123 Farmley Street, City, Country
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Icon sx={{ mr: 2, color: 'primary.main' }}>phone</Icon>
                <Box>
                  <Typography variant="subtitle1">Phone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    +91 1234567890
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Icon sx={{ mr: 2, color: 'primary.main' }}>email</Icon>
                <Box>
                  <Typography variant="subtitle1">Email</Typography>
                  <Typography variant="body2" color="text.secondary">
                    info@farmley.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Icon sx={{ mr: 2, color: 'primary.main' }}>schedule</Icon>
                <Box>
                  <Typography variant="subtitle1">Business Hours</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact 