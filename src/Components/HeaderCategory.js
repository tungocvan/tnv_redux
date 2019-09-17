import React, { Component } from 'react';

export class HeaderCategory extends Component {
    render() {
        return (
            
      <div className="col-lg-4-24 col-sm-3">
      <div className="category-wrap dropdown py-1">
        <button type="button" className="btn btn-light  dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars" /> Categories</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Machinery / Mechanical Parts / Tools </a>
          <a className="dropdown-item" href="/">Consumer Electronics / Home Appliances </a>
          <a className="dropdown-item" href="/">Auto / Transportation</a>
          <a className="dropdown-item" href="/">Apparel / Textiles / Timepieces </a>
          <a className="dropdown-item" href="/">Home &amp; Garden / Construction / Lights </a>
          <a className="dropdown-item" href="/">Beauty &amp; Personal Care / Health </a> 
        </div>
      </div> 
    </div>
   
        );
    }
}

export default HeaderCategory;
