import React from 'react';
import './App.scss';
import BannerHotWord from './features/BannerHotWord';
import HeaderComponent from './features/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BannerHotWord />
    </div>
  );
}

export default App;
