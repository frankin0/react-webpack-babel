import React from 'react';
import 'normalize.css';
import Canvas from './Canvas.jsx';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles

export default class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <div>
          <Canvas />
        </div>
      </div>
    )
  }
}