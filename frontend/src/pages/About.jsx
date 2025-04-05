import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Icon,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(74, 103, 65, 0.9), rgba(74, 103, 65, 0.8)), url('/images/about-hero.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: theme.spacing(12, 0),
  marginBottom: theme.spacing(6),
}))

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}))

const About = () => {
  const sustainabilityFeatures = [
    {
      icon: 'eco',
      title: 'Eco-Friendly Practices',
      description: 'Minimizing carbon footprints and reducing waste.',
    },
    {
      icon: 'handshake',
      title: 'Fair Trade Partnerships',
      description: 'Empowering farmers with fair wages and better opportunities.',
    },
    {
      icon: 'recycling',
      title: 'Sustainable Packaging',
      description: 'Using recyclable and biodegradable materials.',
    },
  ]

  const whyChooseUs = [
    {
      icon: 'verified',
      title: 'Premium Quality',
      description: 'Sourced from the best farms, processed with utmost care.',
    },
    {
      icon: 'spa',
      title: 'No Additives or Preservatives',
      description: 'Pure, natural goodness in every bite.',
    },
    {
      icon: 'security',
      title: 'Certified Excellence',
      description: 'Compliant with industry standards for safety and quality.',
    },
    {
      icon: 'support_agent',
      title: 'Customer-Centric Service',
      description: 'Dedicated support to ensure a seamless shopping experience.',
    },
  ]

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800 }}>
            Welcome to Farmley, where quality meets tradition.
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Story Section */}
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Our Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Our journey began with a simple goal — to bring the finest dry fruits from trusted farmers directly to your home. With a focus on purity and freshness, we ensure every bite is packed with nutrition and taste.
            </Typography>
            <Typography variant="body1" paragraph>
              At Farmley, we celebrate the rich heritage of dry fruits while embracing innovation to meet modern tastes. From carefully selecting premium nuts to delivering them with care, our passion drives everything we do.
            </Typography>
          </Grid>

          {/* Sustainability Section */}
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Sustainability
            </Typography>
            <Typography variant="body1" paragraph>
              We believe in responsible sourcing and supporting local farming communities. Our partnerships with ethical farmers ensure that every product is grown using sustainable practices.
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {sustainabilityFeatures.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FeatureCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Icon color="primary" sx={{ mr: 1 }}>{feature.icon}</Icon>
                        <Typography variant="h6">
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Why Choose Us Section */}
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Why Choose Us
            </Typography>
            <Typography variant="body1" paragraph>
              At Farmley, we stand by our commitment to quality and customer satisfaction. Here's why we are a preferred choice for dry fruit lovers:
            </Typography>
            <Grid container spacing={3}>
              {whyChooseUs.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <FeatureCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Icon color="primary" sx={{ mr: 1 }}>{feature.icon}</Icon>
                        <Typography variant="h6">
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Closing Section */}
          <Grid item xs={12}>
            <Paper 
              elevation={0} 
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white',
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Join Us on Our Journey
              </Typography>
              <Typography variant="body1">
                Because at Farmley, we believe in nourishing lives, one nut at a time.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About 