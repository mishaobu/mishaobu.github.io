import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import config from "../config";
const firebase = require("firebase");






export default class MovieBlock extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = { 
          data: [],
          isOpen: false,
          toolbarButtons: [<button onClick = {this.handleDeleteClick} type = "button" value = "delete" className = "deleteMovieButton"> Delete Movie </button>]
        };
      }

      componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
          } 
          for (let item in this.props.lists) {
            if (!(this.props.json.Lists.includes(item))) {
              let addToList =  [<button onClick = {this.handleListClick} type = "button" value = "list" list = {item} className = "deleteMovieButton"> Add to {item} </button>]
              this.setState({
                toolbarButtons: this.state.toolbarButtons.concat(addToList)
              });
            }
            //console.log(item, this.props.json);
          }
          //console.log(this.props.json.Lists);
      }

      handleListClick(e) {
        let newLists = this.props.json.Lists.concat(e.target.list);
        var updates = {}
        updates['movieid/' + this.props.json.imdbID] = newLists;
        firebase.database().ref("movieid/" + this.props.json.imdbID).update(updates);
        alert(this.props.json.Title + " has been added to " + e.target.list);
      }

      handleDeleteClick() {
        let ref = firebase.database().ref("movieid");
        ref.child(this.props.json.imdbID).remove();
        alert(this.props.json.Title + " has been deleted.");
      }


//Poster, Title, Director, imdbRating
    render() {
       const isOpen = this.state.isOpen;
        return (
            <div>
              <img className = "movieBlock" src = {this.props.json.Poster} onClick = {() => this.setState({isOpen: true})}></img>
            {isOpen && (
              <Lightbox mainSrc = {this.props.json.Poster} 
               imageTitle = {this.props.json.Title} 
               imageCaption = {"Directed by: " + this.props.json.Director + '   ' + "|  IMDB Rating: " + this.props.json.imdbRating} 
               onCloseRequest={() => this.setState({ isOpen: false })}
               //toolbarButtons = {[<button onClick = {this.handleDeleteClick} type = "button" value = "delete" className = "deleteMovieButton"> Delete Movie </button>]}
               toolbarButtons = {this.state.toolbarButtons}
              />
            )}
          </div>
        );
    }
}