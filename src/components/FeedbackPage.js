import React, { Component } from "react";
import config from "../config";
import "./FeedbackPage.css"

const firebase = require("firebase");

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      desc: "",
      message: "",
      visible: null,
      email: "",
      time: null,
      display: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleValidation() {
    if (this.state.name === "") {
      alert("Name cannot be empty.");
    } else if (this.state.name.length < 5) {
      alert("Your name must be longer than 5 letters.");
    } else if (this.state.name.length > 19) {
      alert("Your name must be shorter than 20 letters.");
    } else if (this.state.message.length < 15) {
      alert("Your message must be longer than 15 characters.");
    } else if (this.state.message.length > 500) {
      alert("Your message must be shorter than 500 characters.");
    } else if (this.state.visible === null) {
      alert("Choose whether message will be private or public.");
    } else return true;
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const itemsRef = firebase.database().ref("messages");
      const item = {
        name: this.state.name,
        desc: this.state.desc,
        message: this.state.message,
        visible: this.state.visible,
        email: this.state.email,
        time: Date(firebase.database.ServerValue.TIMESTAMP),
      };
      itemsRef.push(item);
      this.setState({
        name: "",
        desc: "",
        message: "",
        email: "",
        time: null,
      });
      alert("Form submitted");
    }
  }

  componentDidMount() {
    firebase.initializeApp(config);
    let ref = firebase.database().ref("messages");
    ref.on("value", (snapshot) => {
      let newState = [];
      const data = snapshot.val();
      for (let item in data) {
        newState.push({
          id: item,
          name: data[item].name,
          desc: data[item].desc,
          message: data[item].message,
          visible: data[item].visible,
          email: data[item].email,
          time: data[item].time,
        });
      }
      this.setState({
        display: newState,
      });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //only call set state here if it is wrapped in a condition
    //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
    if (this.state.shouldUpdate !== prevState.shouldUpdate) {
      //same code as above to retrieve the data
    }
  }

  render() {
    return (
      <>
        <div className="mainForm">
          <form id="myForm" onSubmit = {this.handleSubmit}>
            <h1>
              {" "}
              Log Your Visit!
            </h1>
            <p>
              {" "}
              Name:
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />{" "}
            </p>

            <p>
              {" "}
              Description:
              <input
                type="text"
                name="desc"
                onChange={this.handleChange}
                value={this.state.desc}
              />{" "}
            </p>

            {/* <p>
              {" "}
              Message:
              <input
                type="text"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
              />{" "}
            </p> */}
            <p>
              {" "}
              Message:
              <textarea
                type="text"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                rows = "10"
              />{" "}
            </p>


     	                <p>Make message private? <br/>
      	                <input type="radio" id="yes" name="visible" onChange={this.handleChange} value={true}/>
      	                <label for="yes">Yes</label>
      					<input type="radio" id="no" name="visible" onChange={this.handleChange} value={false}/>
      					<label for="no">No</label>
                        </p>

            <p>
              {" "}
              Email (Optional):
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />{" "}
            </p>
            <button>
            
            Submit
          </button>
          </form>
        </div>
        <div className="displayResponses">
          <ul className="entry">
            {this.state.display.map((item) => {
              if (item.visible === "false") {
                return (
                  <li key={item.id}>
                    <p className = "center">{item.time.slice(0,25)}</p>
                    <h3>{item.name}</h3>
                    <p className = 'italics'>{item.desc}</p>
                    <p>Message: {item.message}</p>
                    <br/>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </>  
    );
  }
}
export default Form;
