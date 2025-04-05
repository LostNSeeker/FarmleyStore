import { Container, Typography, Box, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#f9f9f9',
}))

const services = [
  {
    title: 'Soil Testing',
    description:
      'Comprehensive soil analysis to determine nutrient content and composition for optimal crop growth.',
    image: '/services/soil-testing.jpg',
  },
  {
    title: 'Crop Advisory',
    description:
      'Expert guidance on crop selection, planting techniques, and maintenance practices.',
    image: '/services/crop-advisory.jpg',
  },
  {
    title: 'Irrigation Solutions',
    description:
      'Modern irrigation systems and water management techniques for efficient farming.',
    image: '/services/irrigation.jpg',
  },
  {
    title: 'Pest Management',
    description:
      'Integrated pest management solutions to protect crops while minimizing environmental impact.',
    image: '/services/pest-management.jpg',
  },
  {
    title: 'Market Access',
    description:
      'Connecting farmers with markets and helping them get the best prices for their produce.',
    image: '/services/market-access.jpg',
  },
  {
    title: 'Training Programs',
    description:
      'Workshops and training sessions on modern farming techniques and best practices.',
    image: '/services/training.jpg',
  },
]

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Services
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          Comprehensive Agricultural Solutions
        </Typography>
      </StyledPaper>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          Why Choose Our Services?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Expert Team
            </Typography>
            <Typography paragraph>
              Our team consists of experienced agricultural professionals who are
              dedicated to helping farmers succeed.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Customized Solutions
            </Typography>
            <Typography paragraph>
              We understand that every farm is unique, and we provide tailored
              solutions to meet specific needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Sustainable Practices
            </Typography>
            <Typography paragraph>
              We promote environmentally friendly farming practices that ensure
              long-term productivity.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Continuous Support
            </Typography>
            <Typography paragraph>
              Our relationship with farmers doesn't end with service delivery;
              we provide ongoing support and guidance.
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          Service Process
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              step: '1',
              title: 'Initial Consultation',
              description:
                'We discuss your farming needs and challenges to understand your requirements.',
            },
            {
              step: '2',
              title: 'Assessment',
              description:
                'Our experts conduct a thorough assessment of your farm and current practices.',
            },
            {
              step: '3',
              title: 'Solution Design',
              description:
                'We develop customized solutions based on our assessment and your goals.',
            },
            {
              step: '4',
              title: 'Implementation',
              description:
                'We help you implement the solutions and provide necessary training.',
            },
            {
              step: '5',
              title: 'Monitoring',
              description:
                'We monitor progress and make adjustments as needed to ensure success.',
            },
            {
              step: '6',
              title: 'Support',
              description:
                'Ongoing support and guidance to help you achieve sustainable results.',
            },
          ].map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.step}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Typography variant="h5">{step.step}</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography>{step.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyledPaper>
    </Container>
  )
}

export default Services 