import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import useInterval from "../../hooks/useInterval";
import { useState } from "react";
import { getExperienceList, getLikeList } from "./data";

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
const Like = styled.div`
  color:${(props)=>props.color};
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

const RightContent = (props) => {
  const experienceList = getExperienceList();
  const likeList = getLikeList();
  const [idx,setIdx] = useState(0);
  const show = useInterval(3000, () => {
    setIdx((idx+1)%2);
  });

  return(
    <Content>
      <div className="greet">
        <div>
          안녕하세요.
        </div>
        <div>
          <Fade bottom opposite when={show}>
            <Like color={(idx%2===0) ? "#087f5b":"#ff922b"}>{likeList[idx]}</Like>
          </Fade>
          Fullstack 개발자 조운호입니다
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