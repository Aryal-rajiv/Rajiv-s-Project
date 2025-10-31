import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {

  
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          <link href="/" color='inherit' >
          Home
          </link>
        </Typography>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

