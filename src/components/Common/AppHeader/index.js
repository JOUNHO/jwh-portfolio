import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useState } from 'react';
import HeaderDrawer from './HeaderDrawer';


const StyledAppBar = styled(AppBar)`
  position:absolute;
  background-color:transparent;
  color:black;
  box-shadow:0 0;
  div {
    font-size: 1rem;
    padding:0.8rem 1.8rem;
    @media ${(props)=>props.theme.mobile}{
      padding:0.5rem 0.5rem;
    }
  }
  .etc {
    font-size : 0.7rem;
  }
`


function AppHeader(props) {
  const [drawerOpen,setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  }

  const moveOnPage= (index) =>{
    toggleDrawer(false);
    props.moveOnPage(index);
  }

  return(
    <>
      <StyledAppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            JWH
          </Typography>
          <div className="etc">
            +82 10-7706-9177
          </div>
          <div className="etc">
            dnsgh9177@naver.com
          </div>
          <div className="etc">
            blog
          </div>
          <div className="etc">
            In.
          </div>
          <div className="etc">
            Gh.
          </div>
          <IconButton color="inherit">
            {
              !drawerOpen ?
                <MenuIcon onClick={() => { toggleDrawer(true) }} />
                :
                <CloseIcon onClick={() => { toggleDrawer(false) }} />
            }
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      
      <HeaderDrawer open={drawerOpen}
                    onClose={() => toggleDrawer(false)}
                    moveOnPage={moveOnPage}
      />
      
    </>
  );
}


export default AppHeader;