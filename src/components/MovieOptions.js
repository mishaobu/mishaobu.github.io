import React, { Component } from 'react'
import axios from 'axios';
import config from "../config";

const firebase = require("firebase");



export default class MovieOptions extends Component {
    
    constructor() {
        super();
        this.state = {
          movieid: "",
          time: null,
          movieRef: null,
          list: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewList = this.handleNewList.bind(this);
      }
    
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

     // tt1596363
      handleValidation() {
        if (this.state.movieid === "") {
          alert("ID cannot be empty.");
        } else if (this.state.movieid.length != 9) {
          alert("ID should be 9 characters.");
         } else return true;
        return false;
      }

      handleNewList(e) {
        e.preventDefault();
        const movieRef = firebase.database().ref("lists/" + this.state.list).set(this.state.list)
            .then(() => this.setState({list: ""})
        );
        alert("New list submitted");
      }
    



    //Poster, Title, Director, imdbRating


      handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
          axios.get('https://www.omdbapi.com/?apikey=fe15e914&i=' + this.state.movieid)
            .then(response => {
                const movieRef = firebase.database().ref("movieid/" + this.state.movieid);
                response.data["Lists"] = []
                console.log(response.data);
                setTimeout(() => movieRef.set(response.data) );
            }).then(() => {
                this.setState({
                    movieid: "",
                    time: null,
                  });
            })
          alert("New movie submitted");
        }
      }

      componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
         } 
      }
    

    render() {
        return (
            <div>
                Add Movie
                <form className = "movieAddForm" onSubmit = {this.handleSubmit}>
                    <input
                        type="text" 
                        name="movieid"
                        onChange={this.handleChange}
                        value={this.state.movieid}
                    />
                </form>
                <div style = {{display: "block"}}>
                <form className = "listAddForm" onSubmit = {this.handleNewList}>
                    <p style = {{marginLeft: "60px", clear: "both"}}>Make list</p>
                    <input type = "text" name = "list"
                        onChange= {this.handleChange}
                        value = {this.state.list}
                    />
                </form>
                </div>
            </div>
        )
    }
}
