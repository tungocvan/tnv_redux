import React, { Component } from 'react';
import HeaderSearch from './HeaderSearch';
// import HeaderCategory from './HeaderCategory';
// import HeaderMenuRight from './HeaderMenuRight';

export class HeaderBottom extends Component {
    render() {
        return (
            
  <section className="header-main shadow-sm">
  <div className="container">
    <div className="row-sm align-items-center">
      {/* <HeaderCategory/>     */} 
      <a className="navbar-brand" href="/"><img className="logo" src="https://azshopweb.com/khachhang/dienthoaixanh/wp-content/backups-dup-pro/wp-content/uploads/2019/07/logo-1.png" alt="alibaba style e-commerce html template file" title="alibaba e-commerce html css theme" /></a>
      <HeaderSearch/> 
      {/* <HeaderMenuRight/> */}
      <h4 className="title-section  text-uppercase" style={{color:'#610703',margin:'auto',fontWeight:600}}>Hotline: 0962.111.333</h4>
    </div> 
  </div> {/* container.// */}
</section> 

        );
    }
}

export default HeaderBottom;

