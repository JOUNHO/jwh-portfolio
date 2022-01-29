import styled from "styled-components"

const Section = styled.div`
  color : ${(props) => props.color};
  background-color:${(props) => props.background || "white"};
  background-image:url("${process.env.PUBLIC_URL}/img/${(props) => props.backgroundImg}");
  background-position: center;
  background-size: cover;
  .container {
    width:100vw;
    display:flex;
    justify-content:${(props)=>props.justifyContent};
    @media ${(props)=>props.theme.mobile}{
      display: ${(props) => props.mobileDisplay || "inline-box"};
    }
  }
  .content { 
    //width:50vw;
    @media ${(props)=>props.theme.mobile}{
      //width:${(props) => props.mobileDisplay? "100vw" :  "50vw"};
    }
  }
`

const SectionLayout = (props) => {
  return(
    <>
      <Section className="section" {...props}>
      <div className="container">
        {props.children}
        </div>
      </Section>
    </>
  )
}
export default SectionLayout;