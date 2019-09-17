import React, { Component } from 'react';

class ProductTop extends Component {
    render() {
        return (
            <section className="section-topbar border-top padding-y-sm">
  <div className="container">
    <span>Supplier: Manufacturer of China Co., Ltd.</span> &nbsp;  <span className="text-warning">2 years</span>
    <div className="float-right dropdown">
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">English</a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="/">Russian </a>
        <a className="dropdown-item" href="/">Arabic </a>
      </div>
    </div> 
  </div> {/* container.// */}
</section>

        );
    }
}

export default ProductTop;