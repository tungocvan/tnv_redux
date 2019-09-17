import React, { Component } from 'react';

export class FooterBottom extends Component {
    render() {
        return (
            <section className="footer-bottom row border-top-white">
      <div className="col-sm-6"> 
        <p className="text-white-50"> Made with &lt;3 <br />  by Vosidiy M.</p>
      </div>
      <div className="col-sm-6">
        <p className="text-md-right text-white-50">
          Copyright ©  <br />
          <a href="http://bootstrap-ecommerce.com" className="text-white-50">Bootstrap-ecommerce UI kit</a>
        </p>
      </div>
    </section> 
        );
    }
}

export default FooterBottom;
