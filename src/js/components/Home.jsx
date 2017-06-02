import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Apod from './Apod/Apod.jsx';
import * as types from '../common/constants';
import NasaService from '../services/NasaService';

const nasaService = new NasaService();

class Home extends Component {
  constructor(){
    super();

    this.state = {
      dataFetched: false,
      errorFetchingStatus: false,
      errorFetchingMsg: '',
      apod: {}
    };

    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.toDisplay = this.toDisplay.bind(this);
  };

  componentDidMount() {
    // Get data from NASA using a promise
    let promise = nasaService.getApodData();
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
      apod: data
    });
  }

  toDisplay() {
    const { dataFetched, errorFetchingStatus,  errorFetchingMsg, apod } = this.state;
    let data = '';

    if (errorFetchingStatus) {    // On ERROR this will be display
      data = (<div className={'Error_Message'}>
          {types.HOME_ERROR_MESSAGE_1} - {errorFetchingMsg}
        </div>);
    } else if (dataFetched) {     // On SUCCESS this will display
      data = (<Apod element={apod} />);
    } else {                            // While promise is getting data LOADING will be dusplay
      data = (<p className={'Loading'}>
          {types.HOME_LOADING}
        </p>);
    }

    return data;
  }

  render() {
    return (
       <article className={'Home'}>
          {this.toDisplay()}
       </article>
    );
  }
}

// ======================================= //
// PROP TYPES
// ======================================= //
Home.propTypes = { };

export default Home;
