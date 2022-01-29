import styled from "styled-components"

const Content = styled.div`
  margin-right: 3vw;
  margin-left:5vw;
  .greet{
    div,span{
      margin-top:0.5rem;
      font-size:1.3rem;
    }
  }
`
const StyledItem = styled.div`
  margin-top: 2rem;
  div{
    margin-top:0.1rem;
  }
  .term, .content{
    color:#495057;
    font-size:0.85rem;
    font-weight:450;
  }
`

export const ExperienceItem = (props) => {
  const {experience} = props;
  return(
    <StyledItem>
      <div className="title">{experience.title}</div>
      <div className="term">{experience.term}</div>
      <div className="content">{experience.content}</div>
    </StyledItem>
  )
};

const RightContent = () => {
  const experienceList = [
    {title:"인천대학교",term:"2015.03 ~ 2021.02",content:"컴퓨터공학과를 전공하여 개발자가 되기위한 기초를 쌓았습니다."},
    {title:"한국소프트웨어 협회", term:"2021.01 ~ 2021.07",content:"6개월동안 웹개발자로서의 교육을 받았습니다."},
    {title:"더존비즈온", term:"2021.08 ~ ",content:"프론트엔드 개발자로서 경영관리 프로그램을 개발하고 있습니다."}
  ]
  return(
    <Content>
      <div className="greet">
        <div>
          안녕하세요.
        </div>
        <div>
          <span>배우는것을 좋아하는</span> 개발자 조운호입니다
        </div>
      </div>
      {
        experienceList.map((experience) => {
          return (
            <ExperienceItem experience={experience} />
          )

        })
      }
    </Content>
  )
}
export default RightContent;