import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import './PDFViewer.less';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

export default class PDFViewer extends Component {
    state = {
        numPages: null,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        const { doc } = this.props;
        const { numPages } = this.state;

        return (
            <div>
                <div className="Example">
                    <div className="Example__container">
                        <div className="Example__container__document">
                            <Document
                                file={doc.url}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                options={options}
                            >
                                {
                                    Array.from(
                                        new Array(numPages),
                                        (el, index) => (
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                            />
                                        ),
                                    )
                                }
                            </Document>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
