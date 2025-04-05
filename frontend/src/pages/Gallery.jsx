import { Container, Typography, Box, Grid, Paper, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#f9f9f9',
}))

const galleryImages = [
  {
    img: '/images/gallery/farm1.jpg',
    title: 'Organic Farm',
    description: 'Our sustainable organic farm in full bloom',
  },
  {
    img: '/images/gallery/harvest.jpg',
    title: 'Harvest Season',
    description: 'Harvesting fresh produce from our fields',
  },
  {
    img: '/images/gallery/workers.jpg',
    title: 'Farm Workers',
    description: 'Our dedicated team working in the fields',
  },
  {
    img: '/images/gallery/equipment.jpg',
    title: 'Modern Equipment',
    description: 'State-of-the-art farming equipment',
  },
  {
    img: '/images/gallery/greenhouse.jpg',
    title: 'Greenhouse',
    description: 'Our advanced greenhouse facilities',
  },
  {
    img: '/images/gallery/products.jpg',
    title: 'Fresh Products',
    description: 'Fresh produce ready for market',
  },
  {
    img: '/images/gallery/irrigation.jpg',
    title: 'Irrigation System',
    description: 'Efficient water management system',
  },
  {
    img: '/images/gallery/community.jpg',
    title: 'Community',
    description: 'Working with local farming communities',
  },
  {
    img: '/images/gallery/sustainability.jpg',
    title: 'Sustainability',
    description: 'Sustainable farming practices in action',
  },
]

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Gallery
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          A Visual Journey Through Our Farm
        </Typography>
      </StyledPaper>

      <ImageList variant="masonry" cols={3} gap={8}>
        {galleryImages.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.description}
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          Our Farming Journey
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Sustainable Practices
            </Typography>
            <Typography paragraph>
              We are committed to sustainable farming practices that protect the
              environment while producing high-quality crops. Our gallery showcases
              our journey towards a more sustainable future.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Community Impact
            </Typography>
            <Typography paragraph>
              Our farm is more than just a business - it's a community. We work
              closely with local farmers and communities to promote sustainable
              agriculture and improve livelihoods.
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  )
}

export default Gallery 