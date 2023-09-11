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
        selectedDoc: state.selectedDoc
    }
}
// someone wants to ask why his mom wants money from him. His name is yunjusong. 1912175377. 024734072
// he doubts she is real mom cuz she cannot want money from him. so he wants to ask her his child name.
// so you have to take from her the exact reason of needed money and his child name.

export default connect(mapStateToProps)(App);
