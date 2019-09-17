import React, { Component } from 'react';
import {connect} from 'react-redux';
import formatMoney,{strip_tags} from './Function';


class HomeContentOne extends Component {

  getID(event,id){
    event.preventDefault();
    console.log(id);
    var item = this.props.getHomeContentOne.filter(value => value.id ===id);
    this.props.isProduct(item);
    //console.log('san pham: '+ JSON.stringify(item));
   // this.props.productSearch(item);
  }
  getCate(event,id){
    event.preventDefault();
   // console.log("title: "+id);
   var item=[];
    if(id==="SẢN PHẨM BÁN CHẠY"){
       item = this.props.getHomeContentOne.filter(value =>value.cateProduct[1] ===id);
      //console.log('cateProduct:' + item[0].cateProduct[0]);
      item[0].cateProduct[0]="SẢN PHẨM BÁN CHẠY";
    } else {
       item = this.props.getHomeContentOne.filter(value => value.cateProduct[0] ===id);
    }
      //this.props.isProduct(item);
    //console.log('san pham: '+ JSON.stringify(item));
   // item.push(id);
    this.props.productSearch(item);
  }

  getItem(){
     var mang_moi = this.props.getHomeContentOne.slice(0,8);
     return  mang_moi.map((value,key)=>{
         let price = formatMoney(value.price,0,".");
         return(
            
          <li key={key} className="col-6 col-md-3">
            <a href="/"  onClick={(event)=>this.getID(event,value.id)}  className="itembox"> 
              <div className="card-body">
                <p style={{color:'#610703',fontWeight:500}} className="word-limit text-center">{value.title}</p>
                <img alt="anh"  className="img-center" src={value.img} />
                <p style={{color:'#610703',fontWeight:700}} className="word-limit text-center">{price} đ</p>
              </div>
            </a>
          </li>
         );
     });
  }
 
    render() {
    
      // if (this.state.isProduct===true) {
      //      return <Redirect to="/product" />;
      // }
     // console.log('san pham: '+ JSON.stringify(this.props.getHomeContentOne));
        var titleCate=[];
        var shortTitle = strip_tags(this.props.getHomeContentOne[0].short_description);
        if(this.props.getTitle==="SẢN PHẨM BÁN CHẠY"){
           titleCate = this.props.getHomeContentOne[0].cateProduct[1];
        } else {
           titleCate = this.props.getHomeContentOne[0].cateProduct[0];
        }
        return (
            <section className="section-content padding-y-sm bg">
  <div className="container">
    <header className="section-heading heading-line">
      <h4 style={{color:'#610703',fontWeight:500}} className="title-section bg">{this.props.getTitle}</h4>
    </header>
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-3">
          <article href="/" className="card-banner h-100" style={{color: 'white',backgroundImage:"url('" + this.props.bgImg +"')"}}>
            <div className="card-body zoom-wrap">
              <h5 className="title">{this.props.getHomeContentOne[0].title}</h5>
              <p>{shortTitle}</p>
              <a href="/"  onClick={(event)=>this.getCate(event,titleCate)}  className="btn btn-warning">Xem tất cả</a>
              {/* <img alt="anh"  src="images/items/item-sm.png" height={200} className="img-bg zoom-in" /> */}
            </div>
          </article>
        </div> {/* col.// */}
        <div className="col-md-9">
          <ul className="row no-gutters border-cols">
            {this.getItem()}
          </ul>
       </div> {/* col.// */}
      </div> {/* row.// */}
    </div> {/* card.// */}
  </div> {/* container .//  */}
</section>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isPro:state.isProduct
  }
}
// this.props.getItemProduct
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getItem: (itemProduct) => {
      dispatch({type:"GET_ITEM",itemProduct})
    },
    isProduct: (item) => {
      dispatch({type:"IS_PRODUCT",item})
    },
    productSearch: (item) => {
      dispatch({type:"PRODUCT_SEARCH",item})
    }
    
  }
}
// this.props.addData()

export default connect(mapStateToProps,mapDispatchToProps)(HomeContentOne);
