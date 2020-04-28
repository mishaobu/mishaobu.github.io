import React, { Component } from 'react'
import './App.css'
import Body from './components/Body'
import TabList from './components/TabList'

export default class blApp extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1
        }
        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        }
    }
    render() {
        const tabs = [
            {
              id: 1,
              title: "Home"
            }, {
              id: 2, 
              title: "Links"
            }, {
              id: 3, 
              title: "Images"
            }, {
              id: 4,
              title: "Projects"
            }
          ]
        return (
            <div className = "body">
                <div className = "nav-bar">
                    <TabList tabs = {tabs}
                    changeTab = {this.changeTab}
                    activeTab = {this.state.activeTab}/>
                </div>
                <div className = "main-body">
                    <Body activeTab = {this.state.activeTab}/>
                </div> 
            </div>
        );
    }
}

