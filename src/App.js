import * as React from 'react'
import Home from './components/views/Home'
import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from './components/views/AboutMe';
import AppHeader from '../src/components/AppHeader';
import Project from './components/views/Project';

const anchors = ["firstPage", "secondPage", "thirdPage"];

function App() {
  return (
    <>
      <AppHeader />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

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