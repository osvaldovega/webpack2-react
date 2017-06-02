import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../../common/constants';

class Header extends Component {
  render() {
    return (
      <article className={'Header'}>
        <img src={types.APP_LOGO.path} alt={types.APP_LOGO.alt} title={types.APP_LOGO.title} />
        {this.props.children}
      </article>
    );
  }

}

// ======================================= //
// PROP TYPES
// ======================================= //
Header.propTypes = {
  appName: PropTypes.string.isRequired
};

export default Header;
