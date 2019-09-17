import React, { Component } from 'react';
import '../admin.css';
// import $ from "jquery";
import {connect} from 'react-redux';
import JsonDataToFireBase from '../Components/JsonDataToFireBase';
import AdminTknh from './AdminTknh';
import AdminBanner from './AdminBanner';
import AdminBannerChay from './AdminBannerChay';
import AdminTragop from './AdminTragop';
import AdminBaiViet from './AdminBaiViet';

export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state={
      upDate:false,
      idAdmin:1
    }
  }
  
  getID(event){
    event.preventDefault();
    console.log("Cap nhat");
    this.setState({
      upDate:true
    })
   
  }
    componentWillMount() {
      this.props.getShow();
    }
    componentDidMount() {
     
    }
  _getAdmin(event,id){
    event.preventDefault();
    console.log('id: '+id);
    this.setState({idAdmin:id});
    
   }
   _getIdAdmin(){
     if(this.state.idAdmin===1){
       return (
        <section id="start">
        <a href="/" onClick={(event)=>this.getID(event)} class="btn btn-primary">Cập nhật Wp to FireBase</a>
        </section>
       )
     }
     if(this.state.idAdmin===2){
      return (
       <AdminTknh/>
      )
    }

    if(this.state.idAdmin===3){
      return (
       <AdminBanner/>
      )
    }
    if(this.state.idAdmin===4){
      return (
       <AdminBannerChay/>
      )
    }
    if(this.state.idAdmin===5){
      return (
       <AdminTragop/>
      )
    }
    if(this.state.idAdmin===6){
      return (
       <AdminBaiViet/>
      )
    }
   }
    render() {
        if(this.state.upDate===true){
          return <JsonDataToFireBase url='https://data.dienthoaisoctrang.com/getproductjson/' tbl='tbl_Sp' store='sp' />
          
        }
        if(!sessionStorage.getItem('isLogin')) return false;
        return (
        <div className="row no-gutters">
          <aside className="aside-wrap col-md-3 col-lg-2">
            <header className="aside-header">
              <a className="float-right d-md-none btn" type="button" data-toggle="collapse" data-target="#navbar_aside">
                <i className="fa fa-bars white fa-lg" /> &nbsp;  Elements
              </a>
              <h6 className="title"><a href="/">Quản trị Website<br /> <small>dienthoaisoctrang.com</small></a></h6>
            </header>
            <div className="aside-content collapse" id="navbar_aside">
              <nav className="menu-wrap">
                <ul className="menu-aside">
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,1)}>Cập nhật dữ liệu</a> </li>
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,2)}>Quản trị tài khoản Ngân hàng</a> </li>
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,3)}>Quản trị Banner</a> </li>
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,4)}>Quản trị Banner Chạy</a> </li>
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,5)}>Quản trị Banner Trả góp</a> </li>
                  <li> <a  href="/" onClick={(event)=>this._getAdmin(event,6)}>Quản trị Bài Viết</a> </li>

                  {/* <li> <a className="page-scroll nav-link" href="#cards">Thêm mới sản phẩm</a> </li>
                  <li> <a className="page-scroll nav-link" href="#cards">Quản trị Banner</a> </li>
                  <li> <a className="page-scroll nav-link" href="#cards">Quản trị tài khoản Ngân hàng</a> </li> */}
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
              {/* <div className="aside-bottom p-3 text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" defaultValue="L2B9M6JFF9C2J" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border={0} name="submit" alt="PayPal – The safer, easier way to donate online!" />
                  <img alt="" border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
                </form>
              </div>  */}
                 <footer className="doc-section-footer text-center bg-white p-3" id="page_footer">
              Copyright © 2019 <br />
              <a href="http://bootstrap-ecommerce.com">Từ Ngọc Vân</a>
            </footer>
            </div>
         
          </aside>
          <main className="main-wrap col-md-9 col-lg-10">

          <header className="header shadow-sm  bg-white">
            <nav className="navbar navbar-light  navbar-expand-md">
{/*               
              <a href="http://bootstrap-ecommerce.com" className="navbar-brand mr-0 mr-md-2" aria-label="Bootstrap">
                <img src="images/logo.png" className="logo" height={36} />
                <div className="slogan">Bootstrap <br /> Ecommerce UI</div>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="../index.html"> Home </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="../main/html-components.html">HTML components</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://bootstrap-ecommerce.com/design.html">Design blocks </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://bootstrap-ecommerce.com/templates.html">Templates</a>
                  </li>
                  <li><a className="nav-link" href="#hireme" data-toggle="modal">Hire me</a></li>
                </ul>
                <a className="btn btn-purple mt-2 mt-md-0 ml-md-3" href="http://bootstrap-ecommerce.com/download.html" data-toggle="tooltip" title="SketchApp Design & HTML Bootstrap version">Download all</a>
              </div>
            */}
            </nav>
          </header>
          
          <div className="main-content">
            {this._getIdAdmin()}
            {/* <section id="start">
            <a href="/" onClick={(event)=>this.getID(event)} class="btn btn-primary">Cập nhật Wp to FireBase</a>
            </section> */}
            


            {/* <footer className="doc-section-footer text-center bg-white p-3" id="page_footer">
              Copyright © 2019 <br />
              <a href="http://bootstrap-ecommerce.com">Từ Ngọc Vân</a>
            </footer> */}
          </div></main>

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