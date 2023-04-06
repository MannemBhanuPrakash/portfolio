import * as React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
// import Link from '@mui/material/Link';


 function Footer() {


  return (
    <div style={{position:"fixed", bottom: 0,left:0, right:0}}>
        <Box >
      <BottomNavigation sx={{ bgcolor: 'info.main'}}
        showLabels>            
        <BottomNavigationAction sx={{ color: 'white'}} label="+91-8184959300" icon={<LocalPhoneIcon />}/>
        <BottomNavigationAction sx={{ color: 'white'}} label="bhanuprakashmannem20@gmail.com" icon={<EmailIcon />} />
      </BottomNavigation>
    </Box>
    </div>
    

  );
}
export default Footer;