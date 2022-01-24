import SectionLayout from '../Common/SectionLayout';
import styled from "styled-components";
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const MyImg = styled.img`

`
const Home = (props) => {
  return(
    <SectionLayout>
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