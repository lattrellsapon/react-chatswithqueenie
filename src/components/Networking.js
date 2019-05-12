import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='container' id='networking'>
        <ul>
          <li>
            <a href='' id='link'>
              <i class='fab fa-instagram' />
            </a>
          </li>
          <li>
            <a href='' id='link'>
              <i class='fab fa-facebook-square' />
            </a>
          </li>
          <li>
            <a href='' id='link'>
              <i class='fas fa-at' />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
