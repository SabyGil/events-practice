import React from 'react';

class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false
    }
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

  }

  handleDelete(e){
    this.setState({
      tasks: this.state.tasks.filter((task) => task !== e)
      // input:
    })
  }


render(){
  return(
    <div>

      <li>
        {this.props.task}

        <button onClick={ (event)=> this.handleClick(event) }>complete</button>
      </li>
      <br></br>

      <br></br>
      mission complete
    </div>
    )
  }
}



export default Todo;
