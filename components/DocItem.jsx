import React, { Component } from "react";
import { selectDoc} from '../action';
import { connect } from 'react-redux';

class DocItem extends Component {
    onSelectItem() {
        this.props.dispatch(selectDoc(this.props));
    }

    render() {
        return (
            <div className="doc-item" onClick={() => this.onSelectItem()}>
                <img src='../assets/img/doc.png' style={{'width':'20px', 'height': '20px'}} alt=''/>
                <p className="title">
                    {this.props.title}
                </p>
                <p className="sub-title">{this.props.subTitle}</p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapDispatchToProps)(DocItem)