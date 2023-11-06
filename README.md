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
        phone: 1912674938 (kimsini's mom) from her husband.
        messages: The watch should be automatic or electric? Did she receive the funds she invested? (She said she would get it by October). Her husband wants to live new house if he returns. So she MUST prepare to live at winter. And she MUST take funds (5k) form her mom in 2 days.
    }
}


export default connect(mapStateToProps)(App);
