import { useEffect, useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { BackLink } from './components/Link/BackLink';
import bannerImg from './assets/icons/banner.png';

function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="container">
          <BackLink />
          <Main />
          <Footer />
        </div>
      </div>
      <div className="banner-wrapper">
        <img className="banner__img" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}

export default App;
