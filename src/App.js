import React from 'react';
import NavBar from './components/NavBar';
import SplashImage from './components/SplashImage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SplashImage />
      </div>
    );
  }
}
