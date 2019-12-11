import React, {Component} from 'react';
import { connect } from 'react-redux'

import PDFViewer from './PDFViewer';

export  class Main extends Component {
    render() {
        const {selectedDoc} = this.props;
        return (
            <div className='viewer'>
                {selectedDoc ? (
                    <div>
                        <div className="ml-5">
                            <img src='../assets/img/doc.png' style={{'width':'28px', 'height': '28px'}} alt=''/>
                            <p className="d-inline-flex ml-2 font-weight-bold">{selectedDoc.title}</p>
                        </div>
                        <PDFViewer doc={selectedDoc}/>
                    </div>
                ) : (
                    <div className='ml-5'>Please select a file on left side</div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedDoc: state.selectedDoc,
    }
}
export default connect(mapStateToProps)(Main);