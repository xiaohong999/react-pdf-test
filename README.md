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
        phone: 1913169729 sonjongsuk(mr.kuak's wife).
        messages: He sent a letter through someone return home. Did she receive it? After read the letter, is there something she want to deliver to husband?
                  Provide boots size of her and daughter.
    }
}


export default connect(mapStateToProps)(App);
