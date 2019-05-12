import React, { Component } from 'react';
import Logo from './components/Logo';
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ImageLinks from './components/ImageLinks';
import Networking from './components/Networking';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Showcase />
        <Navbar />
        <AboutMe />
        <ImageLinks />
        <Networking />
      </div>
    );
  }
}

export default App;
