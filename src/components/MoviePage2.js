import React, { Component } from 'react';
import movies from './data/movies.js';
import ModalImage from "react-modal-image";
import MovieBlock from "./MovieBlock";

// API Key:
//http://www.omdbapi.com/?apikey=3f1dca30&i=tt3896198


// fetch(url).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log(data);
//   }).catch(function() {
//     console.log("Booo");
// });

// poster, title, director, imdb rating
let movie_list = []
let url_list = []
//let retrieved_list = []
let movieBlock

function refreshPage() {
    window.location.reload(false);
}

export default class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {retrieved_list: []};
      }

    // async function getJSON(item, index) {
    //     let response =  await fetch("http://www.omdbapi.com/?apikey=3f1dca30&i=" + item);
    //     return await response.json();
    // }

    componentDidMount() {
        movie_list = movies.split(", ");
        // for (var i = 0; i < movie_list.length; i++) {
        //     //url_list.push("http://www.omdbapi.com/?apikey=3f1dca30&i=" + movie_list[i]);
        //     // fetch(url_list[i])
        //     //     .then(response => response.json())
        //     //     .then(json => this.state.retrieved_list.push(json))
        //     //     .then(console.log(this.state.retrieved_list));
        //     let reponse = await fetch("http://www.omdbapi.com/?apikey=3f1dca30&i=" + movie_list[i]);
        //     let json = await response.json();
        //     let 
        // }
        



        // let movieBlock = retrieved_list.map((moviejson) => moviejson['Title']);
        // // <div>
        // //     <ModalImage className = "ModalImage" small = {moviejson["Poster"]} large = {moviejson["Poster"]}> hi </ModalImage>
        // //     <p> {moviejson["Title"]} </p>
        // //     <p> Directed by: {moviejson["Director"]} Rating: {moviejson["imdbRating"]}</p>
        // // </div>
        console.log(this.state.retrieved_list);
        console.log(typeof(this.state.retrieved_list));
        console.log(this.state.retrieved_list.length);
        
        console.log(this.state.retrieved_list[8]);
        // let numArr = [1,2,3,4,5];
        // numArr.push(6);
        // console.log(numArr[2]);
        // url_list.push("http://www.omdbapi.com/?apikey=3f1dca30&i=" + movie_list[0]);
        // fetch(url_list[0])
        //     .then(response => response.json())
        //     .then(data => console.log(data.Title))
        //     .then(data => retrieved_list.push(data))
        //     .then(data => console.log(retrieved_list));
        movieBlock = movie_list.map((id) =>
        <MovieBlock movieID = {id} />
    );

    }



    // render() {
    //     return movie_list.map((id) =>
    //         <MovieBlock movieID = {id} />
    //         )
    //     //     <div>
    //     //     <br/><br/>
    //     //     <h1> Movies </h1>

    //     //     <p> {movieBlock} </p>
    //     //     {/* <MovieBlock movieID = "tt3896198"/> */}
            
    //     //   </div>
    //     )
    // }

    render() {
        return movie_list.length ? movie_list.map((id) => (
            <MovieBlock movieID = {id}
            className = "movieBlock"
            />
        ));
    }

}