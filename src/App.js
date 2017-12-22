// Notice that below, I did not include , {Component} after import
// React
import React from 'react';
// import Parent from './components/Parent';
import Tester from './components/Tester';

class App extends React.Component {
  render() {
    return (
      <div>
      <Tester />
      </div>
    );
  }
}

export default App;
