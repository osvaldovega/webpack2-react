import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as types from '../../../common/constants';

class NavMenu extends Component {
  constructor() {
    super();

    this.menuLinks = this.menuLinks.bind(this);
  }

  menuLinks() {
    if (typeof (types.MENU_LINKS) === 'object') {
      return types.MENU_LINKS.map((e, i) =>
        <Link key={i} to={e.path}>{e.title}</Link>
      );
    }
    return '';
  }

  render() {
    return (
      <section className={'Menu'}>
        {this.menuLinks()}
      </section>
    );
  }
}

export default NavMenu;
