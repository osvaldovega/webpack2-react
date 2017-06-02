import React, { Component } from 'react';

class About extends Component {

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <article className={'About'}>
        <h1>About</h1>
        <p>This is the about page</p>
      </article>
    );
  }
}

export default About;
