import * as React from 'react'
import Home from './components/Home'
import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from './components/AboutMe';
import AppHeader from './components/Common/AppHeader';
import Project from './components/Project';



function App() {
  const pages = ["HOME", "ABOUT_ME", "PROJECT", "CONTACT"];
  let fullpageAPI;

  /* Header Item 클릭 했을때*/
  const moveOnPage = (index) => {
    fullpageAPI.silentMoveTo(pages[index],index);
  }

  return (
    <>
      <AppHeader moveOnPage={moveOnPage}/>
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
          console.log("render prop change", state, fullpageApi);
          fullpageAPI=fullpageApi;
          return (
            <div>
              <Home />
              <AboutMe />
              <Project />
            </div>
          );
        }}
      />
    </>
  );
}
export default App;