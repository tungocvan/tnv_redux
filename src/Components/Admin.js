import React, { Component } from 'react';
import '../admin.css';
import {connect} from 'react-redux';
import AdminComponent from './AdminComponent';

export class Admin extends Component {
    
    componentWillMount() {
      console.log('componentWillMount');
      
      this.props.getShow();
    }
    componentDidMount(){
      console.log('componentDidMount');
      
    }
    componentDidUpdate(){
      console.log('componentDidUpdate');
      
    }
    render() {
        //console.log('render');
       // if(!sessionStorage.getItem('isLogin')) return false;
        return (
          <div>
          <aside className="aside-wrap col-md-3 col-lg-2">
            <header className="aside-header">
    
              <a className="float-right d-md-none btn" type="button" data-toggle="collapse" data-target="#navbar_aside">
                <i className="fa fa-bars white fa-lg" /> &nbsp;  Elements
              </a>
              <h6 className="title">Quản trị Website <br /> <small>dienthoaisoctrang.com</small></h6>
   
            </header>
            <div className="aside-content collapse" id="navbar_aside">
              <nav className="menu-wrap">
                <ul className="menu-aside">
                <li> <a className="page-scroll nav-link" href="#start">Cập nhật dữ liệu</a> </li>
                <li> <a className="page-scroll nav-link" href="#cards">Quản trị tài khoản Ngân hàng</a> </li>
                {/* <li> <a className="page-scroll nav-link" href="#itemboxes">itemboxes</a> </li>
                <li> <a className="page-scroll nav-link" href="#itemside">Itemside</a> </li>
                <li> <a className="page-scroll nav-link" href="#products">Product cards</a> </li>
                <li> <a className="page-scroll nav-link" href="#product_detail">Product detailed</a> </li>
                <li> <a className="page-scroll nav-link" href="#collapses">Collapses</a> </li>
                <li> <a className="page-scroll nav-link" href="#filter_elements">Filter elements</a> </li>
                <li> <a className="page-scroll nav-link" href="#forms">Forms</a> </li>
                <li> <a className="page-scroll nav-link" href="#order">Order</a> </li>
                <li> <a className="page-scroll nav-link" href="#parameters">Parameters</a> </li>
                <li> <a className="page-scroll nav-link" href="#list_styles">List style</a> </li> */}
                </ul>
              </nav>
              <hr />
              <div className="aside-bottom p-3 text-center">
              </div>
            </div>
          </aside>
          <main className="main-wrap col-md-9 col-lg-10" style={{marginLeft:210}}>
            <header>
              <nav>
               Header
              </nav>
            </header>
          
            <div className="main-content">
                   <AdminComponent/>
            </div>
            <footer>
              Copyright © 2018 <br />
              <a href="http://bootstrap-ecommerce.com">Bootstrap-ecommerce UI kit</a>
            </footer>
          </main>
        </div>
        
        );
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isShow:state.isShow,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getShow: () => {
      dispatch({type:"IS_SHOW"})
    }
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);