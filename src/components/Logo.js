import React, { Component } from 'react';
import MainLogo from '../images/logo.png';
export class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={MainLogo} alt='' />
      </div>
    );
  }
}

export default Logo;
