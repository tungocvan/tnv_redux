import React, { Component } from 'react';
import formatMoney from './Function';
import {connect} from 'react-redux';
export class HomeRequestTwo extends Component {

  getID(event,id){
    event.preventDefault();
    console.log(id);
    var item = this.props.getHomeRequestTwo.filter(value => value.id ===id);
    //this.props.isProduct(item);
    this.props.getProduct(item);
  }
  getItem(){
    return  this.props.getHomeRequestTwo.map((value,key)=>{
   //   console.log(value.title);
      let price = formatMoney(value.price,0,".");
      let regular_price = formatMoney(value.regular_price,0,".");
      return(
        <div key={key} className="col-md-2">
        <figure className="card card-product">
          <div className="img-wrap"> <img alt="anh"  src={value.img} /></div>
          <figcaption className="info-wrap">
           <a href="/" onClick={(event,id)=>this.getID(event,value.id)}>
            <h6 className="title ">{value.title}</h6>
            <div className="price-wrap">
              <span className="price-new">{price} đ</span>
              <del className="price-old">{regular_price} đ</del>
            </div> 
            </a>
          </figcaption>
        </figure> 
      </div> 
      );
  });
  }
    render() {
         return (
            <section className="section-request bg padding-y-sm">
  <div className="container">
    <header className="section-heading heading-line">
      <h4 className="title-section bg text-uppercase">Sản Phẩm Nổi Bật</h4>
    </header>
    <div className="row-sm">
    {this.getItem()}
    </div> {/* row.// */}
  </div>{/* container // */}
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
    getProduct: (item) => {
      dispatch({type:"IS_PRODUCT",item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeRequestTwo);