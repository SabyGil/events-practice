import React from "react";
import Todo from './Todo';

class Parent extends React.Component {
  constructor(){
    super();
    this.state={
      tasks: ["first", "second", "third"],
      input: ''
    }
  }


  handleSubmit(e){
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.input]),
      input: ''
    });
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
    // console.log(e.target.value);

  }

  // filter(function(val){
  //   return val !== val.value
  // })
  render(){
    // debugger
    let tasks = this.state.tasks.map((task)=>
      <Todo task={task} />
    );
    return (
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)}  />
          <input type="submit"/>
        </form>
        {tasks}

      </div>
    );
  }
}

export default Parent;
