import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
  render() {
    const { element } = this.props;
    return (
      <section className={'Camara'}>
        <h1>Pic ID: {element.id}</h1>
        <img src={element.img_src} />
        <label>Fecha de la tierra : {element.earth_date}</label>
        <label>Rover ID : {element.rover.id}</label>
        <label>Rover Name : {element.rover.name}</label>
        <label>Rover Camara Name : {element.camera.full_name} - ({element.camera.name})</label>
        <label>Rover landing date : {element.rover.landing_date}</label>
        <label>Rover launch date : {element.rover.launch_date}</label>
        <label>Rover status : {element.rover.status}</label>
      </section>
    );
  }
}

Photo.PropTypes = {
  element: PropTypes.object.isRequired
};

export default Photo;
