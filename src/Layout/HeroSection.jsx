import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection=()=> {
  return (
    <Container  sx={{
      background: 'linear-gradient(to bottom, #006181, #fff 90%)'
    }} maxWidth={false}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ xs: 'column'}} 
        gap={4}
        sx={{
          padding: '4rem 0', 
        }}
      >
        <Box
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography variant="h3" component="h1" color='#fff' >
            <span style={{ display:"block", textAlign:"center"}}>Find a developer for</span>  live mentorship & freelance projects
          </Typography>
      </Box>
      <Button variant="contained" color="warning" size="large">
            Get Help Now
          </Button>
        </Box>
      <Box
          display="flex"
          justifyContent="center" 
        >
          <img
            src="hero.png" 
            style={{ width: '50%'}}
          />
        </Box>
    </Container>

  );
}

export default HeroSection;