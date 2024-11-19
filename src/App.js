import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import NearMe from './pages/NearMe';
import UserPage from './pages/UserPage';

function App() {
  const [activePage, setActivePage] = useState('Favorites'); // Track the active page

  return (
    <div className="App">
      <div className="app-container">
        {/* {activePage === 'Favorites' && <Favorites />}
        {activePage === 'Near Me' && <NearMe />} */}
        <UserPage />
      </div>
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
