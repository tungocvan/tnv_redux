import React, { Component } from 'react';

export class MobileDetect extends Component {
    
    componentWillMount() {
        var MobileDetect = require('mobile-detect'),
        var md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile()) {
             console.log('Mobile');
             
        }else{
            console.log('Computer');
            
        }

    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MobileDetect;
