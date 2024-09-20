import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import GradingIcon from '@mui/icons-material/Grading';

const CardService = ({title,btnText, imgName, left }) => {
  return (
      <Box 
      display='flex'
      justifyContent='center'
      alignContent="center"
      flexDirection={left? "row-reverse":""}
      >
        <Grid>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
          <Typography variant="h4">
              {title}
            </Typography>
            <Grid alignItems="center" sx={{ mb: 1 }}>
              <BugReportIcon sx={{ mr: 1 }} />
              <Typography variant="caption">
                Debug with the help of an expert.
              </Typography>
            </Grid>
            <Grid alignItems="center" sx={{ mb: 1 }}>
              <LocalLibraryIcon sx={{ mr: 1 }} />
              <Typography variant="caption">
                Personalize your learning experience.
              </Typography>
            </Grid>
            <Grid alignItems="center" sx={{ mb: 2 }}>
              <GradingIcon sx={{ mr: 1 }} />
              <Typography variant="caption">
                Achieve your goals with focused guidance.
              </Typography>
            </Grid>
            <Button variant="contained" color="warning" sx={{width:200}}>
              {btnText}
            </Button>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} gridArea={2}>
          <CardMedia
            component="img"
            image={`${imgName}`}
            alt="Mentorship"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Box>
  );
};

export default CardService;
