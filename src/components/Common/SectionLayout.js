import styled from "styled-components"

const Section = styled.div`
  color : black;
  text-align: center;;
  background-color:${(props) => props.background || "white"};
`

const SectionLayout = (props) => {
  return(
    <>
      <Section className="section" {...props}>
        {props.children}
      </Section>
    </>
  )
}
export default SectionLayout;