import React, { Component } from 'react';
import PodcastImg from '../images/podcast.jpg';
import GalleryImg from '../images/gallery.jpg';
import ThoughtsImg from '../images/thoughts.jpg';
import ChitchatImg from '../images/chitchat.jpg';

export class ImageLinks extends Component {
  render() {
    return (
      <div className='container' id='image-links'>
        <div className='grid'>
          <div>
            <img src={PodcastImg} alt='' />
          </div>
          <div>
            <img src={GalleryImg} alt='' />
          </div>
          <div>
            <img src={ThoughtsImg} alt='' />
          </div>
          <div>
            <img src={ChitchatImg} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinks;
