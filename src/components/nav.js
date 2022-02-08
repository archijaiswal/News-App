import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


// (new Date(publishedAt)).toDateString()

    var today = new Date().toDateString();

    // date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() ;   

export default function SearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style= {{backgroundColor:"white" ,color:"black"}}>
        <Toolbar>
                   
          <img src="images/logo.png" alt="." height="70px" width="70px" />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Highlights<span style={{color: 'red', fontSize: '50px'}}>.</span>
          </Typography>
          
          <Typography variant="h6" noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >{ today}</Typography>
         
          
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search news by category, term, sources"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
