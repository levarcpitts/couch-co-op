import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import NearMe from './pages/NearMe';

function App() {
const [activePage, setActivePage] = useState('Favorites'); // Track the active page

  return (
    <div className="App">
          <div className="app-container">
      {/* {activePage === 'Favorites' && <Favorites />}
      <Footer activePage={activePage} setActivePage={setActivePage} /> */}
      <NearMe />
      <Footer />
      </div>
    </div>
  );
}

export default App;
