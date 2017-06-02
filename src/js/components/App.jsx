import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header.jsx';
import NavMenu from './Header/Menu/Menu.jsx';
import Home from './Home.jsx';
import Rover from './Rover/Rover.jsx';
import About from './About/About.jsx';
import '../../public/stylesheets/sass/index.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header appName='Universe'>
            <NavMenu />
          </Header>
          <Route exact path='/' component={Home} />
          <Route path='/rover' component={Rover} />
          <Route path='/about' component={About} />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
