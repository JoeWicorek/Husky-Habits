import React from 'react';
import { HeaderTitle } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { NavBar } from './components/Navigation.js';

import './index.css';

function App(props) {
  return (
    <div className="App">
      <HeaderTitle />
      <Footer />
      <NavBar />
      {/* Other components and content */}
    </div>
  );
}

export default App;

