import React, { Component } from 'react'
import Body from './components/Body'
import TabList from './components/TabList'
import './App.css'


export default class blApp extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1,
        }
        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        }
    }

    // componentDidMount() {
    //     if (!firebase.apps.length) {
    //         firebase.initializeApp(config)
    //     } 
    //     let ref = firebase.database().ref('data')

    //     //retrieve its data
    //     ref.on('value', snapshot => {
    //         //this is your call back function
    //             //state will be a JSON object after this
    //         //set your apps state to contain this data however you like
    //         const state = snapshot.val()
    //         //since i use react 16, i set my state like this
    //         //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
    //         setData(state)
    //     })
    // }

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
            }, {
                id: 5,
                title: "Feedback"
            }, {
                id: 6,
                title: "Movies"
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

