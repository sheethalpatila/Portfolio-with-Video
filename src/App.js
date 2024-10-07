import React from 'react';
import './App.css'; // Add CSS for video styling 
import Footer from './comonents/Fotter'; 
import FirstSection from './comonents/FirstSection';
import VerticalNav from './comonents/VerticleNav';

const App = () => {
  return (
    <div className="app">
      {/* <VerticalNav /> */}
      <video className="background-video" autoPlay loop muted>
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className="NameTag">
        <p data-testid='name'>Sheethal Patil A</p> 
       </div> 
       <FirstSection /> 
       <Footer />
    </div>
  );
}

export default App;
