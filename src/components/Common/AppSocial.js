import styled from 'styled-components';

const StyledAppSocial = styled.div`
    
  position: fixed;
  z-index: 20;
 
  @media ${(props)=>props.theme.desktop}{
    right:-2rem;
    bottom: 45%;
    transform: rotate(
                -90deg
                );
  }
  @media ${(props)=>props.theme.tablet}{
    bottom:2rem;
  }
  @media ${(props)=>props.theme.mobile}{
    bottom:2rem;
  }
`
const StyledA = styled.a`
    font-size:0.9rem;
    color:${(props)=>props.color};
    margin-left : 1rem;
    
    
`

const AppSocial = (props) => {
  return(
    <StyledAppSocial>
      <StyledA color="#ff922b">Bl.</StyledA>
      <StyledA color="#087f5b">Gh.</StyledA>
      <StyledA color="#ff922b">In.</StyledA>
      <StyledA color="#087f5b">Fb.</StyledA>
    </StyledAppSocial>
  )
  
}
export default AppSocial;