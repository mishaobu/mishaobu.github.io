import React, { Component } from 'react'
import Home from './Home'
import Images from './Images'
import Links from './Links'
import Projects from './Projects'
import FeedbackPage from './FeedbackPage'
import MoviePage from './MoviePage'

export default class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab;
        if(activeTab === 1) {
            return <Home/>
        }
        else if (activeTab === 2) {
            return <Links/>;
        }
        else if (activeTab === 3) {
            return <Images/>;
        }
        else if (activeTab === 4) {
            return <Projects/>;
        }
        else if (activeTab === 5) {
            return <FeedbackPage />
        }
        else if (activeTab == 6) {
            return <MoviePage />
        }
    }

    render() {
        return ( this.displayContent() );
    }
}
