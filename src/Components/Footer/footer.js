import React, { Component } from 'react';
import './footer.scss';

export default class footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="footer__disclaimer">
                       <p>© 2021 test USA, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}