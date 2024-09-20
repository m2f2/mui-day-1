import { Container, Typography } from '@mui/material';
import CardService from '../components/CardService';
import HiringSection from '../components/HiringSection';

const ServiceSection=()=> {
  const isLeft = true
  return (
    <Container maxWidth="lg">
    <Typography variant="h4" textAlign={'center'} p={'4rem'}>Get help from vetted software developers</Typography>
      <CardService title='One-on-One Live Mentorship' btnText='Find a Mentor' imgName='mentorship.jpg' left={!isLeft}/>
      <CardService title='Project-based freelance work' btnText='Find a Freelancer' imgName='freelance.png' left={isLeft}/>

    <HiringSection/>
    </Container>
  );
}


export default ServiceSection;