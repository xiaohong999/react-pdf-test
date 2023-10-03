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
        messages: He sent somethings through someone return home. What is the list she received? he thinks he maybe return at Jan 1(+- 1 month). what does she need?
    }
}


export default connect(mapStateToProps)(App);
