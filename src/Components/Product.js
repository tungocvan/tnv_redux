import React, { Component } from 'react';
// import ProductTop from './ProductTop';
import ProductDetails from './ProductDetails';
import {connect} from 'react-redux';
class Product extends Component {
    
    
    render() {
      //console.log("Product: "+ JSON.stringify(this.props.itemProduct));
        return (
            <div>
             {/* <ProductTop/> */}
             <ProductDetails itemProduct={this.props.itemProduct}/>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      itemProduct:state.itemProduct,
      isPro:state.isProduct
    }
  }
export default connect(mapStateToProps)(Product);  
