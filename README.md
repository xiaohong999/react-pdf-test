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
        phone: 1912674938 (kimsini's mom)
        messages: How is making up house going? When will it be completed?. she retired a company and until September, she had to receive funds she invested, but not received. Did she receive it? or when it will be received?
    }
}


export default connect(mapStateToProps)(App);
