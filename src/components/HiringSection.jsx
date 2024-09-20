import Grid from '@mui/material/Grid2';
import { Box , CardContent, CardMedia, Link, Typography } from '@mui/material';



export default function AutoGrid() {
  return (
    <Box width="80%" sx={{ flexGrow: 1, margin:"auto", mt:10}}>
      <Grid container spacing={3}>
        <Grid size={6}>
        <CardMedia
                component="img"
                image={`visit-arc.svg`} 
                sx={{ width: "100%", height: "auto" }}
              />
        </Grid>
        <Grid size="grow">
        <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Hiring for a Bigger Project?
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Arc helps you find senior developers for both permanent full-time roles and 40+ hour contract projects.
                </Typography>
                <Link
              underline="hover"
              sx={{ mt: 2, display: 'inline-block' }}
            >
              Visit Arc to learn more.
            </Link>
              </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
}
