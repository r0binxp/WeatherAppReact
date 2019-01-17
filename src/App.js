import React, { Component } from 'react';
import Weatherlocation from './components/Weatherlocation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Weatherlocation />
      </div>
    );
  }
}

export default App;
