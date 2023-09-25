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
        phone: 1912963501 choiyongsuk(mom of kimhyona).
        messages: What is the address her family live now?
                  Is her younger brother married?
                  She sent 5k yuan 2 times at 2021, and 3000 yuan at 10/2022. Her mom received them all?
                  Her mom must no tell anyone(like her boss) about got this messages.
    }
}

export default connect(mapStateToProps)(App);
