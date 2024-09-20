import { Avatar, Typography, Card, Box } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import PhpIcon from '@mui/icons-material/Php';

const DeveloperCard=({ name, role, avatar }) =>{
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={`${avatar}`} sx={{ width: 56, height: 56, mr: 2 }} />
        <Box>
          <Typography variant="h6" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
          <JavascriptIcon/>
          <HtmlIcon/>
          <PhpIcon/>
        </Box>
      </Box>
    </Card>
  );
}


export default DeveloperCard