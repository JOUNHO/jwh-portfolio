import SectionLayout from "../Common/SectionLayout";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Fade from 'react-reveal/Fade';

const AboutMe = (props) => {
  const {openPage} = props;

  return (
    <SectionLayout backgroundImg="door.jpg" 
                   mobileDisplay="inline" 
                   color="black"
                   justifyContent="center"
                   >
      <Fade left appear when={openPage}>
        <LeftContent />
      </Fade>
      <Fade right appear when={openPage}>
        <RightContent />
      </Fade>
    </SectionLayout>
  )
}

export default AboutMe;