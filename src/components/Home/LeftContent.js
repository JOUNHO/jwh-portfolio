import styled from "styled-components"



const Content = styled.div`
  
  margin-left: 9rem;
  .name{
    font-size: 6rem;
  }
`

const LeftContent = (props) => {
  return(
    <Content>
      <div className="name">UNHO</div>
      <div className="name">JO</div>
      <hr/>
      <div>Fullstack Developer; </div>
      <div>귀요미</div>
    </Content>
    
  )
}
export default LeftContent;