import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import{Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/databoard'>  
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2  }}
          >
        
            <HomeIcon
            sx={{ color:"white" }} />
        
          </IconButton>
    </Link>
    
          <Link to='/add-details'>  
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,marginRight:"full" }}
          >
            <PersonAddIcon
            sx={{ color:"white" ,fontSize:"24px"}} />
          </IconButton>

                
                
          
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar