import React, { Component } from 'react';
import HomeMain from './HomeMain';
// import HomeRequestOne from './HomeRequestOne';
import HomeContentOne from './HomeContentOne';
// import HomeContentTwo from './HomeContentTwo';
// import HomeRequestTwo from './HomeRequestTwo';
import {connect} from 'react-redux';
import HomeLinks from './HomeLinks';
// import HomeSubscribe from './HomeSubscribe';
import Product from './Product';
import WriteInfoUser from './WriteInfoUser';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {sp:null}
  }
  
  componentWillMount() {
    if(localStorage.getItem('sp')) {
        var data = localStorage.getItem('sp');
        this.setState({
          sp:data
        });
     }
  }
  getHomeProduct(){
    //console.log(typeof(this.state.sp));
    // LAPTOP - PC
    if(this.state.sp!==null){
     var mang = JSON.parse(this.state.sp);
     this.props.getSanpham(mang);
     var sanphambanchay =  mang.filter(value => value.cateProduct[0] === "SẢN PHẨM BÁN CHẠY" || value.cateProduct[1] === "SẢN PHẨM BÁN CHẠY");
     var appleiphone =  mang.filter(value => value.cateProduct[0] === "APPLE IPHONE");
     var applewatch =  mang.filter(value => value.cateProduct[0] === "APPLE WATCH");
     var nokia8800 =  mang.filter(value => value.cateProduct[0] === "NOKIA 8800");
     var phukienzin =  mang.filter(value => value.cateProduct[0] === "PHỤ KIỆN ZIN");
     var laptoppc =  mang.filter(value => value.cateProduct[0] === "LAPTOP - PC");
     var cate = this.getCategory();
     this.props.getCate(cate);
     return(
       <div>
          <HomeMain/>
          <HomeContentOne getHomeContentOne={sanphambanchay} getTitle={"SẢN PHẨM BÁN CHẠY"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/SPBANCHAY.jpg"}/>
          <HomeContentOne getHomeContentOne={appleiphone} getTitle={"APPLE IPHONE"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/APPLEIPHONE.jpg"}/>
          <HomeContentOne getHomeContentOne={applewatch} getTitle={"APPLE WATCH"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/APPLEIWATCH.jpg"}/>
          <HomeContentOne getHomeContentOne={nokia8800} getTitle={"NOKIA 8800"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/NOKIA8800.jpg"}/>
          <HomeContentOne getHomeContentOne={phukienzin} getTitle={"PHỤ KIỆN ZIN"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/AIRPOD2.jpg"}/>
          <HomeContentOne getHomeContentOne={laptoppc} getTitle={"LAPTOP - PC"} bgImg={"http://azshopweb.com/khachhang/upload/uploads/MACBOOK.jpg"}/>
          {/* <HomeContentTwo getHomeContentTwo={appleiphone}/> */}
          {/* <HomeRequestOne/> */}
          {/* <HomeRequestTwo getHomeRequestTwo={applewatch}/> */}
          <HomeLinks/>
          <WriteInfoUser/>
          {/* <HomeSubscribe/> */}
      </div>
     )
    }
  }
  deduplicate(arr) {
    let set = new Set(arr);
    return Array.from(set);
  }
  getCategory(){
    if(this.state.sp!==null){
      let mang = JSON.parse(this.state.sp);
      var mangCate = [];
      for (const key in mang) {
       var items = mang[key].cateProduct;
       for (const item of items) {
         mangCate.push(item);
       }
      }
      let ans = this.deduplicate(mangCate);
      return ans;
      
    }
  }
  render() {
    if(this.props.isShow===true || this.props.isProSearch===true || this.props.isFooterOne===true || this.props.isHome===true) return false;
    if(this.props.isPro===true) return <Product/>
    return (
      <div>
           {this.getHomeProduct()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isPro:state.isProduct,
    isProSearch:state.isProSearch,
    isFooterOne: state.isFooterOne,
    isHome:state.isHome,
    isShow:state.isShow,
}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isProduct: () => {
      dispatch({type:"IS_PRODUCT"})
    },
    getCate: (cate) => {
      dispatch({type:"GET_CATE",cate})
    },
    getSanpham: (item) => {
      dispatch({type:"GET_SANPHAM",item})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
