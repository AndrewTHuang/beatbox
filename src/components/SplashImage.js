import React from 'react';
import styles from '../styles/SplashImage.scss';

export default class SplashImage extends React.Component {
  render() {
    return (
      <div className='splash-container'>
        <div className='splash-text'>
          <p className='splash-tagline'>Discover Your New Favorite Band</p>
        </div>
        <button className='splash-cta'>Learn More</button>
      </div>
    );
  }
}
