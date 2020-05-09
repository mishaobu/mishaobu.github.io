import React, { useState, useEffect } from 'react';
import Form from "./Form"

import config from './config.js'
import firebase from 'firebase'


//firebase.initializeApp(config)

// let testjson = {
//     value1: "1",
//     value2: "2"
// }

// let leftBox = {
//     position: 'absolute',
//     marginLeft: '3%',
//     width: '60%',
//     border: '2px solid green'
// }

// const rightBox = {
//     position: 'absolute',
//     marginLeft: '68%',
//     width: '29%',
//     border: '2px solid blue'
// }

export default function FeedbackPage() {

    const [data, setData] = useState([])
    const [shouldRender, setShouldRender] = useState(true)
    const sample = ['hi', 'hello', 'hey']


    //firebase.initializeApp(config)

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 
        let ref = firebase.database().ref('data')

        //retrieve its data
        ref.on('value', snapshot => {
            //this is your call back function
                //state will be a JSON object after this
            //set your apps state to contain this data however you like
            const state = snapshot.val()
            //since i use react 16, i set my state like this
            //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
            setData(state)
        })
    }, [shouldRender]);
    // do this where we submit the form: setShouldRender(!shouldRender)

    return (
        <div>
            <h1>Submit Feedback</h1>
            <div style = {leftBox} >
                <Form/>
            </div>
            <div style = {rightBox}>
                {sample.map((value) => (
                    <p>
                        {value}
                    </p>
                ))}
            </div>




            {/* <button onclick = {firebase.database().ref('data').push().set(jsonBody)} /> */}
            {/* <p> {data} </p> */}
        </div>
    )
}