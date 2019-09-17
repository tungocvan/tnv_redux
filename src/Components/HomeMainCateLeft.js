import React, { Component } from 'react';
import {connect} from 'react-redux';

export class HomeMainCateLeft extends Component {
  componentWillMount() {
    if(localStorage.getItem('sp')){
       this.setState({data:localStorage.getItem('sp')});
    }
  }
  constructor(props) {
    super(props);
    this.state ={
       data:null

   }
}
    printCate(cate){
      var cate=["SẢN PHẨM BÁN CHẠY","APPLE IPHONE","APPLE WATCH","NOKIA 8800","LAPTOP - PC","PHỤ KIỆN ZIN"];
      return cate.map((value,key)=>{
        if(value!=="SLIDER"){
        return (
          <li key={key}> <a style={{color:'#610703',fontWeight:500}} href="/" onClick={(event)=>this.cateSp(event,key)}>{value}</a></li>
        );
        }
      })
      
    } 
    cateSp(event,key){
      event.preventDefault();
      console.log('key: '+key);
      if(this.state) {
        var data = JSON.parse(this.state.data);
        if(key===0) {
          let dataNew =  data.filter(value => value.cateProduct[0] === "SẢN PHẨM BÁN CHẠY" || value.cateProduct[1] === "SẢN PHẨM BÁN CHẠY");
          dataNew[0].cateProduct[0]="SẢN PHẨM BÁN CHẠY";
          this.props.productSearch(dataNew);
        }
        if(key===4) {
          let dataNew =  data.filter(value => value.cateProduct[0] === "LAPTOP - PC");
          this.props.productSearch(dataNew);
        }
        if(key===5) {
          let dataNew =  data.filter(value => value.cateProduct[0] === "PHỤ KIỆN ZIN");
          this.props.productSearch(dataNew);
        }
        if(key===2) {
          let dataNew =  data.filter(value => value.cateProduct[0] === "APPLE WATCH");
          this.props.productSearch(dataNew);
        }
        if(key===3) {
          let dataNew =  data.filter(value => value.cateProduct[0] === "NOKIA 8800");
          this.props.productSearch(dataNew);
        }
        if(key===1) {
          var dataNew =  data.filter(value => value.cateProduct[0] === "APPLE IPHONE");
          this.props.productSearch(dataNew);
        }
      }
      
    }
    render() {
         return (
          <aside className="col-md-3">
          <h5 style={{color:'#610703',fontWeight:500}} className="text-uppercase">DANH MỤC SẢN PHẨM</h5>
          <ul className="menu-category">
            {this.printCate(this.props.cate)}
           </ul>
        </aside> 
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cate:state.cate,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    productSearch: (item) => {
      dispatch({type:"PRODUCT_SEARCH",item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeMainCateLeft);

