import React, { Component } from 'react';

export class ButtonGroup extends Component {
    render() {
        return (
            <div className="btn-group white">
              <a className="btn btn-facebook" title="Facebook" target="_blank" href="/"><i className="fab fa-facebook-f  fa-fw" /></a>
              <a className="btn btn-instagram" title="Instagram" target="_blank" href="/"><i className="fab fa-instagram  fa-fw" /></a>
              <a className="btn btn-youtube" title="Youtube" target="_blank" href="/"><i className="fab fa-youtube  fa-fw" /></a>
              <a className="btn btn-twitter" title="Twitter" target="_blank" href="/"><i className="fab fa-twitter  fa-fw" /></a>
            </div>
        );
    }
}

export default ButtonGroup;
