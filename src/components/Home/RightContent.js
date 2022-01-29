import styled from "styled-components"

const Content = styled.div`
  display:flex;
  margin-left: 40vw;
  justify-content: center;
  .img{
    position:absolute;
    width: 40rem;
    height: 30rem;
    bottom:-4rem;
    background-image:url("${process.env.PUBLIC_URL}/img/cloud.png");
    background-size: cover;
    background-position: top left;
    @media ${(props)=>props.theme.mobile}{
      bottom:-8rem;
    };
    @media ${(props)=>props.theme.tablet}{
      bottom:-6rem;
    }
  }
  .text{
    z-index:1;
    margin-top:10rem;
    color:#ff922b;
    font-size:3rem;
    .folio{
      font-size:3rem;
      color:#087f5b;
    }
  }
`

const RightContent = (props) => {
  return(
    <Content>
      <div className="img">
        <div className="text">
          PORT<span className="folio">FOLIO</span>
        </div>
      </div>
    </Content>    
  )
}
export default RightContent;