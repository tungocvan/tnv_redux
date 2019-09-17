import React, { Component } from 'react';
import {connect} from 'react-redux';
class HomeContentTwo extends Component {
  
  getID(event,id){
    event.preventDefault();
    console.log(id);
    var item = this.props.getHomeContentTwo.filter(value => value.id ===id);
    this.props.isProduct(item);
    //console.log('san pham: '+ JSON.stringify(item));
   // this.props.productSearch(item);
  }
  getCate(event,id){
    event.preventDefault();
   // console.log(id);
    //var item = this.props.getHomeContentTwo.filter(value => value.id ===id);
    //this.props.isProduct(item);
    var item = this.props.getHomeContentTwo.filter(value => value.cateProduct[0] ===id);
    this.props.productSearch(item);
  }
  getItem(){
    //console.log(this.props.getHomeContentTwo);
    var mang_moi = this.props.getHomeContentTwo.slice(0,8);
    return  mang_moi.map((value,key)=>{
        //console.log(value.id);
        return(
           
         <li key={key} className="col-6 col-md-3">
           <a href="/"  onClick={(event)=>this.getID(event,value.id)} className="itembox"> 
             <div className="card-body">
               <p className="word-limit">{value.title}</p>
               <img alt="anh"  className="img-sm" src={value.img} />
             </div>
           </a>
         </li>
        );
    });
 }
    render() {
         return (
            <section className="section-content padding-y-sm bg">
  <div className="container">
    <header className="section-heading heading-line">
      <h4 className="title-section bg text-uppercase">ĐIỆN THOẠI IPHONE</h4>
    </header>
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-3">
          <article href="/" className="card-banner h-100 bg2">
            <div className="card-body zoom-wrap">
              <h5 className="title">{this.props.getHomeContentTwo[0].title}</h5>
              <p>{this.props.getHomeContentTwo[0].short_description} </p>
              <a href="/"  onClick={(event)=>this.getCate(event,this.props.getHomeContentTwo[0].cateProduct[0])}  className="btn btn-warning">Xem tất cả</a>
              <img alt="anh"  src="images/items/item-sm.png" height={200} className="img-bg zoom-in" />
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeContentTwo);