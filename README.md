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
        questions(si): Ask she bought an oven (few days ago, her husband did let her buy it there). If she has not yet, her husband really need to buy it here? this means the oven is required or not.
        
    }
}


export default connect(mapStateToProps)(App);
