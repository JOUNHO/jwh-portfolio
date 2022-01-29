import styled from "styled-components"

const Content = styled.div`
  .img{
    width:18rem;
  }
  @media ${(props)=>props.theme.tablet}{
    .img{
      width:17rem;
    }
  }
`
const LeftContent = () => {
  return(
    <Content>
      <img src={`${process.env.PUBLIC_URL}/img/me.jpg`} className="img"/>
        <div className="text">
        </div>
    </Content>
  )
}
export default LeftContent;