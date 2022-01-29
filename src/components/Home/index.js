import SectionLayout from '../Common/SectionLayout';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import Fade from 'react-reveal/Fade';

const Home = (props) => {
  const {openPage} = props;

  return(
    <SectionLayout backgroundImg="homebg.jpg" color="white">
      <Fade left appear when={openPage}>
        <LeftContent />
      </Fade>
      <Fade right appear when={openPage}>
        <RightContent />
      </Fade>
    </SectionLayout>
  );
}
export default Home;