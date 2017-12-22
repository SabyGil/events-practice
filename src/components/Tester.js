import React from 'react';
import { TesterChild } from './components/TesterChild';

class Tester extends React.Component {
  constructor(){
    super();
      this.state = {
        name: 'mac'
      }
  }

  render(){

    return (
      <div>
        <TesterChild name = {this.state.name}/>
      </div>
    );
  }
}

export default Tester;
