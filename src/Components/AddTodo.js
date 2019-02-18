import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  onChange = (e) => this.setState({ [e.target.name]: 
  e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
         type="text" 
         name="title"
         style={{ flex: '10', padding: '5px', backgroundColor: '#bbc7ba' }} 
         placeholder="Add To-do ..." 
         value={this.state.title}
         onChange={this.onChange}
         
        />
        <input
         type="submit"
         value="Submit"
         className="btn"
         style={{flex: '1', backgroundColor: '#99a89e',color: '#d7dbd1'}}
        />
      </form>
    )
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo