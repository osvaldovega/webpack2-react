// React and Redux Imports
import React from 'react';
import ReactDOM from 'react-dom';

// HTML Container where data will be insert
const rootElement = document.getElementById('app');

const ComponentToRender = (Component) => {
  ReactDOM.render(
    <div>
      <Component />
    </div>,
    rootElement
  );
};

export default ComponentToRender;
