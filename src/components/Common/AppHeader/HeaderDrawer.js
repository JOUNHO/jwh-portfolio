import Flip from 'react-reveal/Flip';
import styled from 'styled-components';
import {Drawer, List} from '@mui/material';

const StyledDrawer = styled(Drawer)`
  z-index:101;
  .list {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color : black;
    height:100vh;
    color:white;
    text-align:center;
  }
  .listItem {
    font-size:5rem;
    margin-top:1rem;
    &:hover{
      cursor:pointer;
      color:#e03131;
      webkit-transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }
  }
`

const HeaderDrawer = (props) => {
  return (
    <StyledDrawer anchor={"top"}
      open={props.open}
      onClose={props.onClose}
      transitionDuration={{ enter: 400, exit: 400 }}
    >
      <List className="list">
        <Flip bottom cascade duration={1500}>
          <div>
            {["HOME", "ABOUT ME", "PROJECT", "CONTACT"].map((text, index) => (
              <div className="listItem" onClick={() => { props.moveOnPage(index) }}>
                {text}
              </div>
            ))}
          </div>
        </Flip>
      </List>
    </StyledDrawer>
  )
}
export default HeaderDrawer;