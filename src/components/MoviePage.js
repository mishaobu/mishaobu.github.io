import React, { Component } from 'react';
import movies from './data/movies.js';
import MovieBlock from "./MovieBlock";
import axios from 'axios';


// API Key:
//http://www.omdbapi.com/?apikey=3f1dca30&i=tt3896198

export default class MoviePage extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.addMovie = (movie) => {
            var movieList = this.state.movies.concat(movie);
            this.setState({
                movies: movieList
            })
        }
    }

    componentDidMount() {
        var data = require('./data/movies.json');
        data.movies.map((movieID, index) => (
            axios.get('https://www.omdbapi.com/?apikey=fe15e914&i=' + movieID)
                .then(response => {
                    this.addMovie(response.data);
                })
        ));
    }

    render() {
        return(
        <div className = "movieBlockDiv">
            {this.state.movies.map((movieJSON, index) => (
                <MovieBlock key={index} json={movieJSON} />
            ))}
        </div>
        )
    }

}