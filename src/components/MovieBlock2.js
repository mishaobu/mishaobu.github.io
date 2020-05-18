import React, { Component } from 'react';
import ModalImage from "react-modal-image";


export default class MovieBlock2 extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
      }
    
    //   componentDidMount() {
    //     fetch("http://www.omdbapi.com/?apikey=3f1dca30&i=" + this.props.movieID)
    //       .then(res => res.json())
    //       .then(json => this.setState({ data: json }));
    //   }

    render() {
        return (
            <div>
            <ModalImage className = "movieBlock" small = {this.props.json.Poster} large = {this.props.json.Poster} />
            <p> {this.props.json.Title} </p>
            <p> Directed By: {this.props.json.Director}; IMDB Rating: {this.props.json.imdbRating} </p>
          </div>
        )
    }
}