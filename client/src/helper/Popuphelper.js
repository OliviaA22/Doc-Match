import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import 'magnific-popup';

class Popuphelper extends Component {
    componentDidMount() {
        function popup() {
            $('.gallery-thumb').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                mainClass: 'mfp-fade',
            });
        }
        popup();
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default Popuphelper;