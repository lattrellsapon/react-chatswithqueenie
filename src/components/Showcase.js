import React, { Component } from 'react';
import MainDP from '../images/main-dp.jpg';

export class Showcase extends Component {
  render() {
    return (
      <div className='showcase'>
        <div className='flex-container'>
          <div className='showcase-content'>
            <p>"Making something out of nothing . . ."</p>
          </div>
          <div className='main-dp'>
            <img src={MainDP} alt='' />
            <h3> - Queenie Jose</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
