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
        phone: sini's mom
        messages: Her husband bought 2 mink coats and 2 watches she wanted. She received the funds from her mom? Her hustand wants that she buy microwave oven(she wanted to buy it here) in there. Her hustand wants that she should send $1000 to someone (Mr.KwakHakBin's home - 1913169729) by this week.
    }
}


export default connect(mapStateToProps)(App);
