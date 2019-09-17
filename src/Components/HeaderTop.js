import React, { Component } from 'react';

export class HeaderTop extends Component {
    render() {
        return (
            
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="/"><img className="logo" src="https://azshopweb.com/khachhang/dienthoaixanh/wp-content/backups-dup-pro/wp-content/uploads/2019/07/logo-1.png" alt="alibaba style e-commerce html template file" title="alibaba e-commerce html css theme" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTop">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown"><a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">   Sourcing </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Top  Suppliers</a></li>
            <li><a className="dropdown-item" href="/">Suppliers by Regions </a></li>
            <li><a className="dropdown-item" href="/">Online Retailer</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown"><a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">   Services </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Trade Assurance </a></li>
            <li><a className="dropdown-item" href="/">Arabic</a></li>
            <li><a className="dropdown-item" href="/">Logistics Service </a></li>
            <li><a className="dropdown-item" href="/">Membership Services</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown"><a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">   Community </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Help Center</a></li>
            <li><a className="dropdown-item" href="/">Submit a Dispute </a></li>
            <li><a className="dropdown-item" href="/">For Suppliers </a></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className="nav-link"> Multi Request </a></li>
        <li className="nav-item"><a href="http://bootstrap-ecommerce.com/" className="nav-link"> Download</a></li>
      </ul> {/* navbar-nav.// */}
    </div> {/* collapse.// */}
  </div>
</nav>
         

        );
    }
}

export default HeaderTop;
