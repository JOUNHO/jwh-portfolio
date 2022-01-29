import * as React from 'react'
import Home from './components/Home'
import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from './components/AboutMe';
import AppHeader from './components/Common/AppHeader';
import Project from './components/Project';
import AppSocial from './components/Common/AppSocial';
import { useState } from 'react';
import { ConnectingAirportsOutlined } from '@mui/icons-material';



function App() {
  const pages = ["HOME", "ABOUT_ME", "PROJECT", "CONTACT"];
  let fullpageAPI;
  const [destinationPage,setDestinationPage] = useState(1);
  /* Header Item 클릭 했을때*/
  const moveOnPage = (index) => {
    fullpageAPI.moveTo(pages[index],index);
  }

  const viewPage = (pageNumber) => {
    return (destinationPage ? destinationPage===pageNumber : true);
  }
  return (
    <>
      <AppHeader moveOnPage={moveOnPage} destinationPage={destinationPage}/>
      <ReactFullpage
        v2compatible={true}
        anchors={pages}
        scrollOverflow={true}
        navigation
        navigationPosition={"left"}
        navigationTooltips={pages}
        onLeave={(origin, destination, direction) => {
        }}
        render={({ state, fullpageApi }) => {
          fullpageAPI=fullpageApi;
          if(state.destination){
            setDestinationPage(state.destination);
          }
          
          return (
            <div>
              <Home openPage={viewPage(1)}/>
              <AboutMe openPage={viewPage(2)}/>
              <Project openPage={viewPage(3)}/>
            </div>
          );
        }}
      />
      <AppSocial></AppSocial>
    </>
  );
}
export default App;