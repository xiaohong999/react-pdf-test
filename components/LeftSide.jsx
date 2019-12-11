import React, { Component } from "react";
import DocItem from "./DocItem";
import { addDoc} from '../action';
import { connect } from 'react-redux'

class LeftSide extends Component {
    onClickAdd = (e) => {
        e.preventDefault();
        this.upload.click();
    };
    onFileChange(e) {
        let files = e.target.files[0];
        this.props.dispatch(addDoc({
            id: this.props.docs.length + 1,
            title: files.name,
            subTitle: 'This is test',
            url: files
        }))
    }


    render() {
        const {docs} = this.props;

        return (
            <div className='left-side'>
                <div className="app-logo">
                    <img src="../assets/img/logo.png" alt="logo" />
                    <span>Reader Zone</span>
                </div>
                <div className='list'>
                    <div className="list-label">
                        <span>Files</span>
                    </div>
                    <div>
                        {docs.map(item => (
                            <DocItem key={item.id} {...item}/>
                        ))}
                    </div>
                </div>
                <div className='upload'>
                    <input type="file" name="file" onChange={e => this.onFileChange(e)} ref={(ref) => this.upload = ref} style={{display:'none'}}/>
                    <button
                        type="button"
                        className="btn btn-warning fixed-bottom ml-5 mb-3 color-white"
                        onClick={this.onClickAdd}
                        name="uploadButton"
                    >
                        <img src='../assets/img/upload.png' style={{'width':'28px', 'height': '28px'}} alt=''/> Upload Files
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        docs: state.docs,
    }
}
export default connect(mapStateToProps)(LeftSide);