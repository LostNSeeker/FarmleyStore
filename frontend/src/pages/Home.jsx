import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { styled } from '@mui/material/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(74, 103, 65, 0.9), rgba(74, 103, 65, 0.8)), url('/images/hero-bg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: theme.spacing(12, 0),
  marginBottom: theme.spacing(6),
}))

const FeatureIcon = styled(CheckCircleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1),
}))

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
}))

const Home = () => {
  const { user, isAuthenticated } = useAuth()

  const features = [
    '100% Natural and Fresh',
    'Ethically Sourced',
    'Quality Assured',
  ]

  const testimonials = [
    {
      name: 'Priya S.',
      content: "Absolutely love the freshness of Farmley's almonds. Highly recommend!",
      rating: 5,
    },
    {
      name: 'Rahul K.',
      content: "The best dry fruits I've ever had. Great taste and quality!",
      rating: 5,
    },
    {
      name: 'Ananya M.',
      content: 'Perfect for gifting! The packaging was elegant and premium.',
      rating: 5,
    },
  ]

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" gutterBottom>
                Welcome to Farmley
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 'normal' }}>
                Your one-stop destination for premium quality dry fruits. Our products are sourced from the finest farms to ensure freshness and nutrition in every bite.
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, fontStyle: 'italic' }}>
                "Pure, Nutritious, and Delicious Dry Fruits."
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Shop Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* About Section */}
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              About Farmley
            </Typography>
            <Typography variant="subtitle1" paragraph>
              At Farmley, we are passionate about bringing you the finest dry fruits directly from trusted farmers. Our commitment to quality and authenticity ensures that every product meets the highest standards. Whether it's almonds, cashews, raisins, or dates, we deliver wholesome goodness to your doorstep.
            </Typography>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Why Choose Farmley?
            </Typography>
            <Box sx={{ mt: 2 }}>
              {features.map((feature) => (
                <Box
                  key={feature}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <FeatureIcon />
                  <Typography variant="h6">{feature}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Testimonials Section */}
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Customer Testimonials
            </Typography>
            <Grid container spacing={3}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <TestimonialCard>
                    <CardContent>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontStyle: 'italic', mb: 2 }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          — {testimonial.name}
                        </Typography>
                        <Rating value={testimonial.rating} readOnly />
                      </Box>
                    </CardContent>
                  </TestimonialCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home 