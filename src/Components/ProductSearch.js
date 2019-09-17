import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeRequestTwo from './HomeRequestTwo';
class ProductSearch extends Component {
    
    componentWillMount() {
        
      }
    
    render() {
        if(this.props.isProSearch===false) return false;
      //  console.log("sanpham: "+ localStorage.getItem('sp'));
     // console.log('productSearch: '+ JSON.stringify(this.props.productSearch[0]));
        var title =this.props.productSearch[0].cateProduct[0];
        return (
            <div>
                <HomeRequestTwo getHomeRequestTwo={this.props.productSearch} getTitle={title}/>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      isProSearch:state.isProSearch,
      productSearch:state.productSearch,  
    }
  }
  
export default connect(mapStateToProps)(ProductSearch);
