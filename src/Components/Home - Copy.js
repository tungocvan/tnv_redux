import React, { Component } from 'react';
import HomeMain from './HomeMain';
import HomeContentOne from './HomeContentOne';
import HomeContentTwo from './HomeContentTwo';
import HomeRequestOne from './HomeRequestOne';
import HomeRequestTwo from './HomeRequestTwo';
import HomeLinks from './HomeLinks';
import HomeSubscribe from './HomeSubscribe';
import {connect} from 'react-redux';
import Product from './Product';


export class Home extends Component {
    
    
  componentWillMount() {
    //console.log('Home Will:'+localStorage.getItem('sanpham'));
    
    if(localStorage.getItem('sanpham')){
      this.setState({
        sanpham: localStorage.getItem('sanpham') ,
      });
    } 
}

constructor(props) {
    super(props);
    this.state = {
        sanpham:null,
    }
}
    
    getHomeMain(){
      // return this.state.sanpham.filter(value => value.id >= 2149);
      //console.log(kq);
    } 
    getHomeContentOne(){
      // console.log('Home:'+ typeof(this.state.sanpham));
       var mang = JSON.parse(this.state.sanpham);
       return mang.filter(value => value.cateProduct[0] === "PHỤ KIỆN ZIN");
       //console.log('getHomeContentOne:'+getHomeContentOne);
    }
    getHomeContentTwo(){
      // console.log('Home:'+ typeof(this.state.sanpham));
       var mang = JSON.parse(this.state.sanpham);
       return mang.filter(value => value.cateProduct[0] === "APPLE IPHONE");
       //console.log('getHomeContentOne:'+getHomeContentOne);
    }
    getHomeRequestTwo(){
      var mang = JSON.parse(this.state.sanpham);
      return mang.filter(value => value.cateProduct[0] === "APPLE IPHONE" || value.cateProduct[0] === "APPLE WATCH");
    }
    render() {
      if(this.props.isProduct===true) {
        return <Product/>
      }
        return (
            <div>
                 <HomeMain/>
                 <HomeContentOne getHomeContentOne={this.getHomeContentOne()}/>
                 <HomeContentTwo getHomeContentTwo={this.getHomeContentTwo()}/>
                 <HomeRequestOne/>
                 <HomeRequestTwo getHomeRequestTwo={this.getHomeRequestTwo()}/>
                 <HomeLinks/>
                 <HomeSubscribe/> 
                 
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isProduct:state.isProduct,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSanpham: (getSanpham) => {
      dispatch({type:"getSanpham",getSanpham})
    }
  }
}
// this.props.addData()

export default connect(mapStateToProps, mapDispatchToProps)(Home);
