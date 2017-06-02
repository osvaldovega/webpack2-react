import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../../common/constants';
import Photo from './Camara/Photo.jsx';
import NasaService from '../../services/NasaService';

const nasaService = new NasaService();

class Rover extends Component {
  constructor(){
    super();

    this.state = {
      rover: {},
      dataFetched: false,
      errorFetchingStatus: false,
      errorFetchingMsg: ''
    };

    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.toDisplay = this.toDisplay.bind(this);
  }

  componentDidMount() {
    let promise = nasaService.getRoversData();
    promise.then(this.onSuccess)
    .catch(this.onError);
  }

  onError(error) {
    this.setState({ errorFetchingStatus: true,  errorFetchingMsg: error.message });
  }

  onSuccess(data) {
    this.setState({
      errorFetchingStatus: false,
      errorFetchingMsg: '',
      dataFetched: true,
      rover: data
    });
  }

  toDisplay() {
    const { rover, dataFetched, errorFetchingStatus,  errorFetchingMsg } = this.state;
    let data;

    if (errorFetchingStatus) {
      data = (
        <div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {errorFetchingMsg}
        </div>
      );
    } else if (dataFetched) {
      data = rover.photos.map((e, i) => <Photo key={i} element={e} />);
    } else {
      data = (
        <p className={'Loading'}>
          {types.HOME_LOADING}
        </p>
      );
    }

    return data;
  }

  render() {
    return (
      <section className={'Rover'}>
        {this.toDisplay()}
      </section>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Rover.propTypes = { };

export default Rover;
