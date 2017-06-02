import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Apod extends Component {
  render() {
    const { element } = this.props;

    // Check if is a video or pic to display
    const media = element.url.includes('youtube')
      ? <iframe src={element.url}></iframe>
      : <img src={element.url} />;

    return (
      <article className={'Apod'}>
        <label>{element.title}</label>
        {media}
        <figcaption>{element.explanation}</figcaption>
        <span>by {element.copyright}</span>
      </article>
    );
  }
}

Apod.PropTypes = {
  element: PropTypes.object.isRequired
};

export default Apod;
