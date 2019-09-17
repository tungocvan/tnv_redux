import React, { Component } from 'react';
import {connect} from 'react-redux';
class HomeMainRight extends Component {
  getID(event){
    event.preventDefault();
    //console.log('banner tra gop');
    
    if(localStorage.getItem('sp')){
      let tragop = JSON.parse(localStorage.getItem('sp'));
      var item = tragop.filter(value => value.sku==="hotrotragop");
      console.log('item tra gop: '+item);
      this.props.getFooterOne(item);
    }  
  }
    render() {
        return (
           
          <aside className="col-md-3">
          {/* <h6 className="title-bg bg-secondary"> Qualified Suppliers</h6> */}

          
          <div className="fb-page" data-href="https://www.facebook.com/itshopst/" style={{height: 130}} data-tabs="timeline" data-width={342} data-height={130} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/itshopst/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/itshopst/">TÍN Mobile</a></blockquote>
          </div>
         <div >
         <img onClick={(event)=>this.getID(event)} style={{width:290}} src="https://azshopweb.com/khachhang/upload/uploads/tragop.gif" alt=""/>
         </div>
  
        
        </aside>
  
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
  
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFooterOne: (item) => {
      dispatch({type:"FOOTER_ONE",item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainRight);
