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
        messages: The watch should be automatic or manual? If husband returns, he can live new house? Did she receive the funds he invested. (She said she would get it by October)
    }
}


export default connect(mapStateToProps)(App);
