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
        phone: 1912963501 choiyongsuk(kimhyona's mom).
        messages: What is the address her family live now?
                  Is her younger brother married?
                  She sent 5k yuan 2 times at 2021, and 3000 yuan at 10/2022. Family received them all?
                  Family must no tell anyone(like her boss) about got this messages.
    }
}

function mapStateToProps(state) {
    return {
        docs: state.docs,
        selectedDoc: state.selectedDoc,
        phone: 1913350805 (okhyang's mom).
        messages: She sent some funds to family but it didn't be arrived. She knows about that and trying to resolve it. So family don't need to worry about that.
                  If family needs something(like funds), let you know.
                  Family must no tell anyone(like her boss) about got this messages.
    }
}

export default connect(mapStateToProps)(App);
