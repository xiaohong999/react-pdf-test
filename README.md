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
        phone1: 1913475614 (GwangSu's home)
        questions: Ask what they require when his son returns (don't say nothing. saying helps him and save money). His son is gonna buy big refrigerator. That's okay for them?
        phone2: 1915196853 (HyonSu's home)
        questions: Ask what they require when his son returns (don't say nothing. saying helps him and save money). Did his sister marry?
        phone3: sini's
        questions: does she need water heater (with gas, not electric)
    }
}


export default connect(mapStateToProps)(App);
