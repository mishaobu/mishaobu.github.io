import React, { Component } from 'react'
import Home from './Home'
import Images from './Images'
import Links from './Links'
import Projects from './Projects'

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
        else {
            return <Projects/>;
        }
    }

    render() {
        return ( this.displayContent() );
    }
}
