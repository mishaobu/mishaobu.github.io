import React from 'react';
import './alert.css'


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      message: '',
      visible: false,
      email: '',
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  submitForm = (event) => {
    if (this.state.username === '' || this.state.desc === '' || this.state.message === '') {
        alert("Submit failed, required fields empty.");
    }
    else {
        console.log('woo');
        document.getElementById("myForm").reset();
    }
  }

  render() {
    return (
    <>
      <form id = 'myForm'>
      <h1> Log Your Visit! {this.state.username} {this.state.age}</h1>
      <p> Name:
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      /> </p>

      <p> Description:
      <input
        type='text'
        name='desc'
        onChange={this.myChangeHandler}
      /> </p>

      <p> Message:
      <input
        type='text'
        name='message'
        onChange={this.myChangeHandler}
      /> </p>

      <p>Make message visible to other guests?
      <input
        type='checkbox'
        name='visible'
        onChange={this.myChangeHandler}
      /> </p>

      <p> Email (Optional):
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      /> </p>
      </form>
      <button type = "submit" form = "form1" onClick = {this.submitForm}> Submit </button>
    </>
    );
  }
}