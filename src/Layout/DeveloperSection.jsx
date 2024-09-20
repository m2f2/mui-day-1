import { Box, Button, Container, Grid2 as Grid, Typography } from "@mui/material";
import DeveloperCard from "../components/DeveloperCard";

const DeveloperSection = () => {
  return (
    <Container
      sx={{ backgroundColor: "#006080", color: "#fff", mt: 10, py: 4}}
      maxWidth={false}
    >
      <Typography variant="h4" textAlign="center" sx={{ p: 3 }}>
        Connect with
      </Typography>
      <Typography variant="h4" textAlign="center">
        12000+ top developers anytime
      </Typography>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Jessamyn Smith"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Jessamyn Smith"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Daniel Hamilton"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Daniel Hamilton"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Jessamyn Smith"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DeveloperCard
              name="Jessamyn Smith"
              role="Experienced Full-Stack Web Developer"
              avatar="avatar.png"
            />
          </Grid>
        </Grid>
      </Container>

      <Typography variant="h4" textAlign="center">
      Start working with our developers
      </Typography>
      
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m:3,
      }}
    >
      <Button variant="contained" color="warning">
        GET STARTED
      </Button>
    </Box>
    </Container>
  );
};

export default DeveloperSection;

