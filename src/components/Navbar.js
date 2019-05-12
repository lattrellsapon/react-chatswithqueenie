import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
            <a href='' id='link'>
              Home
            </a>
          </li>
          <li>
            <a href='' id='link'>
              Podcast
            </a>
          </li>
          <li>
            <a href='' id='link'>
              Thoughts
            </a>
          </li>
          <li>
            <a href='' id='link'>
              Gallery
            </a>
          </li>
          <li>
            <a href='' id='link'>
              Chitchat
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
