import { Container, Typography, Box, Grid, Paper, Card, CardContent, CardMedia, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#f9f9f9',
}))

const blogPosts = [
  {
    title: 'Sustainable Farming Practices',
    excerpt: 'Learn about modern sustainable farming techniques that help protect the environment while increasing yields.',
    image: '/images/blog/sustainable-farming.jpg',
    date: 'March 15, 2024',
    author: 'John Doe',
  },
  {
    title: 'Organic Farming Benefits',
    excerpt: 'Discover the numerous benefits of organic farming for both farmers and consumers.',
    image: '/images/blog/organic-farming.jpg',
    date: 'March 10, 2024',
    author: 'Jane Smith',
  },
  {
    title: 'Smart Irrigation Systems',
    excerpt: 'How modern irrigation technology is revolutionizing water management in agriculture.',
    image: '/images/blog/irrigation.jpg',
    date: 'March 5, 2024',
    author: 'Mike Johnson',
  },
  {
    title: 'Crop Rotation Techniques',
    excerpt: 'Understanding the importance of crop rotation and how to implement it effectively.',
    image: '/images/blog/crop-rotation.jpg',
    date: 'February 28, 2024',
    author: 'Sarah Williams',
  },
]

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Blog
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          Latest Updates and Insights
        </Typography>
      </StyledPaper>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.title}>
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
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  By {post.author} | {post.date}
                </Typography>
                <Typography paragraph>{post.excerpt}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#4CAF50',
                    '&:hover': {
                      backgroundColor: '#45a049',
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          Subscribe to Our Newsletter
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography>
            Stay updated with the latest farming tips, news, and insights.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#4CAF50',
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  )
}

export default Blog 