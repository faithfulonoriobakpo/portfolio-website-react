import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import About from './Components/About/About';
import Techstack from './Components/Tech Stack/Techstack';

const App = () => {
  return(
    <>
      <Sidebar />
      <About />
      <Techstack />
    </>
  );
}

export default App;
