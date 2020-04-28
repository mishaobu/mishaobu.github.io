import React, { Component } from 'react'
import Tab from './Tab'

export default class TabList extends Component {
    render() {
        return this.props.tabs.map((indTab) => (
            <Tab tab = {indTab}
            className = "Tab"
            changeTab = {this.props.changeTab}
            activeTab = {this.props.activeTab}/>
        ));
    }
}
