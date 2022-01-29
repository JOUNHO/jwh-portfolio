import styled from "styled-components"
import Fade from 'react-reveal/Fade';
const Content = styled.div`
  margin-left: 10vw;
  .name{
    font-size: 6rem;
    @media ${(props)=>props.theme.mobile}{
    }
  }
  .etc{
    margin-top: 1rem;
  }
`
const StyledHr = styled.hr`
    width:50%;
    margin-left:${(props)=>props.marginLeft||"0rem"};
    color:${(props)=>props.color};
    border-color: ${(props)=>props.color};  
    background-color: ${(props)=>props.color};  
    height: 0.1rem;
`

const LeftContent = (props) => {
  return(
    <Content>
      <div className="name">UNHO</div>
      <div className="name">JO</div>
      <StyledHr color="#ff922b" />
      <StyledHr color="#087f5b" marginLeft="5rem" />
      <div className="etc">Fullstack Developer; </div>
      <div className="etc">Web Service;</div>
    </Content>

  )
}
export default LeftContent;