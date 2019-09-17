import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from '../BackEnd/Login';
export class FooterCol extends Component {
  constructor(props) {
    super(props);
    this.state={
      admin:false,
      data:null
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('sp')){
     var footerData=[];
     let spData = JSON.parse(localStorage.getItem('sp'));
     for (const key in spData) {
      // console.log('footerData: '+spData[key].slug.substr(0, 5));
       
      if(spData[key].slug.substr(0, 6)==="footer") {
        footerData.push(spData[key]);
      }             
     }
     //console.log('footerData: '+ JSON.stringify(footerData[0].title));
     
    // let footerData = dataSp.filter(value =>value.slug===PushSubscription()) 
      this.setState({data:footerData});
    }
  }
  
    getID(event,id){
      event.preventDefault();
      console.log(id);
      var item = this.state.data.filter(value => value.id ===id);

      this.props.getFooterOne(item);
     // console.log('Footer id: '+ JSON.stringify(item));
    // this.props.productSearch(item);
    }
    getLogin(event,id){
      event.preventDefault();
      console.log(id);
      this.props.getShow();
      this.setState({admin:true})
    }
    getFooterOne(footerData){
      return footerData.map((value,key) => {
        return (
          <li key={key} > <a href="/" onClick={(event)=>this.getID(event,value.id)}>{value.title}</a></li>
        )
      })
    }
    render() {
        if(this.state.data===null) return false;
        if(this.state.admin===true){
            return <Redirect to="/Login" />; 
        }
        return (
           
        <aside className="col-sm-3 col-md-3 white">
        {/* <h5 className="title">Customer Services</h5> */}
        <ul className="list-unstyled">
          {this.getFooterOne(this.state.data)}
          {/* <li><Link to={"/Admin"} className="">Đăng nhập</Link></li> */}
          <li> <a href="/" onClick={(event)=>this.getLogin(event,"Admin")}>Đăng nhập</a></li>
          {/* <li> <a href="/" onClick={(event)=>this.getID(event,1)}>Hướng dẫn mua hàng Online</a></li>
          <li> <a href="/">Chính sách bảo hành</a></li>
          <li> <a href="/">Chính sách đổi trả</a></li>
          <li> <a href="/">Giao hàng & Thanh toán</a></li>
          <li> <a href="/">Giới thiệu chung</a></li>
          <li> <a href="/">Tuyển dụng</a></li>
          <li> <a href="/">Gửi góp ý, khiếu nại</a></li>
          <li> <a href="/">Hỗ Trợ Trả Góp</a></li> */}
          
        </ul>
      </aside>
    
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isFooterOne: state.isFooterOne,
    isPro:state.isProduct,
    isShow:state.isShow,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFooterOne: (item) => {
      dispatch({type:"FOOTER_ONE",item})
    },
    getShow: () => {
      dispatch({type:"IS_SHOW"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterCol);





