import SectionLayout from '../Common/SectionLayout';
import styled from "styled-components";
import LeftContent from './LeftContent';
import RightContent from './RightContent';


const Home = (props) => {
  return(
    <SectionLayout backgroundImg="homeBackGround.jpg">
      <div className="container">
      <div className="content">
        <LeftContent/>
      </div>
      <div className="content">
        <RightContent/>
      </div>
      </div>
      
    </SectionLayout>
  );
}
export default Home;