import React, { Component } from 'react';
import MovieBlock from "./MovieBlock";
import MovieOptions from "./MovieOptions";

// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

//import 'bootstrap/dist/css/bootstrap.min.css';



import config from "../config";
import "./FeedbackPage.css"
const firebase = require("firebase");

// API Key:
//http://www.omdbapi.com/?apikey=3f1dca30&i=tt3896198

export default class MoviePage extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            lists: [],
            activeList: "All Movies",
            showLists: false,
            search: "",
            activeFilter: false,
            filteredMovies: [],
        }
        this.handleListSelect = this.handleListSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleListSelect(e) {
        this.setState({
            activeList: e.target.value
        });
        firebase.database().ref("lists/" + e.target.value).once('value').then((snapshot) => {
            for (let item in snapshot.val()) {
                //console.log(item);
            }
        })
        firebase.database().ref("movieid").once('value').then((snapshot) => {
            //console.log(snapshot.val()['tt8579674']);
        })
    }

    handleSearchChange(e) {
        this.setState({
            search: e.target.value
        });
        if (e.target.value !== "") {
             this.state.activeFilter = true;
        }
        else {
            this.state.activeFilter = false;
        }
        let filteredMovies = []
        for (let i in this.state.movies) {
            if (this.state.movies[i].Title.toLowerCase().includes(e.target.value)) {
                filteredMovies.push(this.state.movies[i]);
            }
        }
        this.setState({
            filteredMovies: filteredMovies
        });
        //console.log(this.state.lists);

    }


    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
         } 
         let ref;

        //firebase.database().ref("lists/Seen/" + "tt8579674").set("tt8579674");

        //if (this.state.activeList === "All Movies") {
            ref = firebase.database().ref("movieid");
        // } else {
        //     ref = firebase.database().ref("lists/" + this.state.activeList) ;
        // }
          ref.on("value", (snapshot) => {
            let newState = [];
            const data = snapshot.val();
            for (let item in data) {
              newState.push(
                data[item]
              );
            }
            this.setState({
              movies: newState,
            });
          });

          let ref2 = firebase.database().ref("lists");
          ref2.on("value", (snapshot) => {
            let newState = ["All movies"];
            const data = snapshot.val();
            // for (let item in data) {
            //   console.log(data[item], data, data.key);
            //   newState.push(data[item]);
            // }
            Object.keys(data).forEach(function(key) {
                //console.log(key);
                newState.push(key);
            });
            this.setState({
              lists: newState,
            });
          });
    }

    render() {
        if (this.state.activeFilter === false) {
            return(
            // <div>
            //     <div className = "navBar">
            //     <h1> Search </h1>
            //         <form className = "movieSearch">
            //             <input type = "text" name = "search"
            //                 onChange= {this.handleSearchChange}
            //                 value = {this.state.search}
            //             />
            //         </form>
            //     <select onChange = {this.handleListSelect}>
            //         {this.state.lists.map((list, index) => <option value = {list}> {list} </option>)}
            //     </select>

            //     <MovieOptions />
            //     {this.state.movies.map((movieJSON, index) => (
            //     <MovieBlock key={index} json={movieJSON} lists = {this.state.lists}/>
            // ))};
            // </div>
            // </div>
            <div className = "movieBlockDiv">
                <ul className = "navbar">
                    <li> Search 
                        <form className = "movieSearch">
                            <input type = "text" name = "search"
                                onChange= {this.handleSearchChange}
                                value = {this.state.search}
                            />
                        </form>
                    </li>
                    <li>
                        <select onChange = {this.handleListSelect}>
                            {this.state.lists.map((list, index) => <option value = {list}> {list} </option>)}
                        </select>
                    </li>
                    <li>
                        <MovieOptions />
                    </li>
                </ul>

                {this.state.movies.map((movieJSON, index) => (
                <MovieBlock key={index} json={movieJSON} lists = {this.state.lists}/>
                ))}

            </div>
            )
        } else {
            return (
            <div>
                <div className = "navBar">
                <h1> Search Filter On </h1>
                <form className = "movieSearch">
                    <input type = "text" name = "search"
                        onChange= {this.handleSearchChange}
                        value = {this.state.search}
                    />
                </form>

                <select onChange = {this.handleListSelect}>
                    {this.state.lists.map((list, index) => <option value = {list}> {list} </option>)}
                </select>

                <MovieOptions />
                {this.state.filteredMovies.map((movieJSON, index) => (
                <MovieBlock key={index} json={movieJSON} lists = {this.state.lists}/>
            ))}
            </div>
            </div>
            )
        }
    }

}