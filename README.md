# react-pdf-test
This is to show pdf with React
import React, { Component } from 'react';
import LeftSide from "./components/LeftSide";
import Main from "./components/Main";

import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            docs: [],
            selectedDoc: null
        }
    }

    render() {
        return (
            <div className='main'>
                <LeftSide/>
                <Main/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        docs: state.docs,
        selectedDoc: state.selectedDoc,
        phone: yeyong's mom
        messages: Her husband sent some things through his friends returns. She has to receive it at Thursday or Friday. 1. Give the things list. 2. His friends took a microwave oven at this time. (We are not sure the oven is allowed to pass or not). So let her ask them if the oven is allowed.
        phone: my wife
        messages: Give me the piano spec what her is gonna buy. I already bought a board bike for son. How about I buy a bike (2 wheels) for son? How about I buy a microwave oven?
    }
}


export default connect(mapStateToProps)(App);
