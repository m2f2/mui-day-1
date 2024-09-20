
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid2 as Grid, Link, Typography } from '@mui/material';

const Footer=()=> {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', lineHeight: 1.3 }}
    >
      <Grid container spacing={4} ml={15}>
        <Grid item xs={12} sm={4} md={3} >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Products
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Codementor
            </Link>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Find a mentor to help you in real time
            </Typography>

            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Codementor Events
            </Link>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Attend and host virtual events for developers
            </Typography>

            <Link href="#" sx={{ color: '#fff' }} underline="none">
              DevProjects
            </Link>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Learn programming by building projects
            </Typography>

            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Arc
            </Link>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Helping employers find talent for remote jobs
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Pages
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Become a Codementor.
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              How it Works
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Find Mentors
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Find Freelancers
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Find a Tutor
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={3} mt={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Communiny
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
              Blog
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Codementor For Students
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Codementor For Teams
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Code Review
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={3} mt={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Pair Programming
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Best Web Design Software
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Coding Starter Kit
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Codementor Reviews
            </Link>
            <Link href="#" sx={{ color: '#fff' }} underline="none">
            Best language to Learn
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: 4, borderTop: '1px solid #444', paddingTop: 3 }}
      >
        <Typography variant="body2" sx={{ color: '#bbb' }}>
          © 2024 Codementor. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            Cookie Policy
          </Link>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            Privacy Policy
          </Link>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            Terms of Service
          </Link>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            <FacebookIcon/>
          </Link>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            <TwitterIcon/>
          </Link>
          <Link href="#" sx={{ color: '#fff' }} underline="none">
            <LinkedInIcon/>
          </Link>
        </Box>
      </Grid>
    </Container>
  );
}

export default Footer;
