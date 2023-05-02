import React from 'react';
import Parallax from './components/parallax';

//assets 
import gorilla from './assets/gorilla.jpg';

function App() {
  return (
    <div>
      <Parallax speed={0.5}>
        <h1>Welcome to my website!</h1>
      </Parallax>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <Parallax speed={0.2}>
        <img src={gorilla} alt="background" />
      </Parallax>
    </div>
  );
}

export default App;