import styled from "styled-components"

const Content = styled.div`
  display:flex;
  margin-left: 40vw;
  justify-content: center;
  .img{
    position:absolute;
    width: 40rem;
    height: 30em;
    bottom:6rem;
    background-image:url("${process.env.PUBLIC_URL}/img/cloud.png");
    background-size: cover;
    background-position: top left
  }

  .text{
    z-index:1;
    margin-top:10rem;
    color:#ff4d5a;
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