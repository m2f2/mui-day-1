import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PositionedMenu from '../components/PositionedMenu';
import { Button } from '@mui/material';

const Navbar=()=>{
  return (
    <AppBar position="static" sx={{ backgroundColor: '#eee', color: '#000' }}>
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <FolderSharedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#000',
              textDecoration: 'none',
            }}
          >
            codementor
          </Typography>
          <PositionedMenu name="Mentorship" items={['one', 'two', 'three']} />
          <PositionedMenu name="Expert help" items={['one']} />
          <PositionedMenu name="Freelancing" items={['one', 'two', 'three']} />
          <PositionedMenu name="More" items={['one', 'two']} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Typography variant="caption">Become a Mentor</Typography>
          <Button variant="text" color="">Log In</Button>
          <Button sx={{ backgroundColor: '#000', color: '#fff'}}>Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;