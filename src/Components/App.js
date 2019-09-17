import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';
// import JsonData from './JsonData';
import { database } from './FireBase';
import FireBaseToLocalStore from './FireBaseToLocalStore';
import FrontEnd from './FrontEnd';
import Admin from '../BackEnd/Admin';
import Login from '../BackEnd/Login';

// import TestJquery from '../BackEnd/TestJquery';
export class App extends Component {
 
 constructor(props) {
   super(props);
   this.state ={
     isLogin:false,
     hienthiForm:false,
     isUpdate:0,
   }
 }
 
 componentWillMount() {
    this.dataRef = database.ref('upDate');
    this.dataRef.on('value', (snapshot) => {
        let isUpdate = snapshot.val();
       // console.log('isUpdate:'+isUpdate);
        
        this.setState({isUpdate:isUpdate})
    })
 }
 componentDidMount(){
   
 }
 componentDidUpdate(){
  if(this.state.isUpdate===1){
   // console.log('Đã update xong');
    // this.dataRef = database.ref('upDate');
    // this.dataRef.set(0);
    // this.setState({isUpdate:0});
  }
 }
  getWriteIp(){
    if(!sessionStorage.getItem('statusOnline')){
      //console.log('WriteInfoIp');
        // return (
        //   <WriteInfoIp />
        // )
    }else{
         // kiểm tra xem session đã tồn tại đc 5 phút chưa
         // nếu được 5p thì cập nhật lại
       }
  }
  setCookie(cname,cvalue,minutes) {
    var d = new Date();
    d.setSeconds(minutes*60 + d.getSeconds());
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
  render() {
   //if(!localStorage.getItem('sp')  ||  !localStorage.getItem('isUpdate9')) {
    //console.log('Đang xữ lý dữ liệu từ server...');
   // if(this.state.isUpdate===1 && localStorage.getItem('sp') || !localStorage.getItem('sp')){
    if(!sessionStorage.getItem('userOnline')){
      sessionStorage.setItem('userOnline',true); 
    //   localStorage.setItem('isUpdate9',true);
    // this.setCookie('isUpdate','online',5);
    return (
      <div>
        {/* <JsonDataToLocalStore url='http://azshopweb.com/json/ip.php' store='tblIp' /> */}
         {/* <JsonData />  */}
         <FireBaseToLocalStore tbl={"tbl_Sp"} store={"sp"} />
      </div>
    )
   }
   else {
     // console.log('Đã xữ lý xong dữ liệu JsonData');

   }  
    return (
      <BrowserRouter>
      {/* {this.getWriteIp()} */}
        {/* <FireBaseToLocalStore tbl={"tbl_Product"} store={"sp1"} /> */}
        <Route extract path='/login' component={Login}></Route>
        <Route extract path='/admin' component={Admin}></Route>
        {/* <Route extract path='/jquery' component={TestJquery}></Route> */}
        <Route extract path='/' component={FrontEnd}></Route>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isPro:state.isProduct,
    isLogin:state.isLogin,
    isShow:state.isShow,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isProduct: () => {
      dispatch({type:"IS_PRODUCT"})
    },
    getLogin: () => {
      dispatch({type:"IS_LOGIN"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);