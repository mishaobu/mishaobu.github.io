import React, { Component } from 'react';
import ModalImage from "react-modal-image";


export default class MovieBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
      }
    
      componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=3f1dca30&i=" + this.props.movieID)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }

    render() {
        return (
          <div>
            <div id = "movieBlockDiv"> 
            <ModalImage className = "movieBlock" small = {this.state.data.Poster} large = {this.state.data.Poster} />
            <p> {this.state.data.Title} </p>
            <p> Directed By: {this.state.data.Director}; IMDB Rating: {this.state.data.imdbRating} </p>
            </div>
          </div>
        )
    }
}