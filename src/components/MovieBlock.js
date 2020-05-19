import React, { Component } from 'react';
import ModalImage from "react-modal-image";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class MovieBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data: [],
          isOpen: false,
        };
      }


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
    
              />
            )}
          </div>
        );
    }
}