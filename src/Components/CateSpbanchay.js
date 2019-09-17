import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeRequestTwo from './HomeRequestTwo';
class CateSpbanchay extends Component {
    
    render() {
        if(this.props.isProSearch===false) return false;
      //  console.log("sanpham: "+ localStorage.getItem('sp'));
     //   console.log('productSearch: '+ JSON.stringify(this.props.productSearch));
        
        return (
            <div>
                <HomeRequestTwo getHomeRequestTwo={this.props.productSearch}/>
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
  
export default connect(mapStateToProps)(CateSpbanchay);
