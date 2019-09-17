import React, { Component } from 'react';
// import {Redirect} from'react-router-dom';
// import ProductSearch from './ProductSearch';
import {connect} from 'react-redux';
export class HeaderSearch extends Component {
  
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
  submitForm = (event) => {
    event.preventDefault();
    if(this.state) {
      var data = JSON.parse(this.state.data);
      var newData=[];
      data.filter(value => {
         let subStr = this.state.txtSearch.toLowerCase();
         let str = value.title.toLowerCase();
         let findTitle =  str.includes(subStr);
         if(findTitle===true){
              newData.push(value) ;
        }
      });
      this.props.productSearch(newData);
    }
  }
  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
     console.log(ten);
     console.log(giatri);
    this.setState({
      [ten]:giatri
    });       
  }
    render() {
        return (
            <div className="col-lg-15-24 col-sm-8">
            <form action="#" className="py-1">
              <div className="input-group w-100">
                <select className="custom-select" name="category_name" onChange={(event)=>this.isChange(event)} >
                  <option value="0">All type</option>
                  <option value="1">Special</option>
                  <option value="2">Only best</option>
                  <option value="3">Latest</option>
                </select>
                <input name="txtSearch" type="text" className="form-control" style={{width: '50%'}} placeholder="Search" onChange={(event)=>this.isChange(event)} />
                <div className="input-group-append">
                  <button className="btn btn-warning" type="submit" onClick={(event)=>this.submitForm(event)}>
                    <i className="fa fa-search" /> Search 
                  </button>
                </div>
              </div>
            </form> {/* search-wrap .end// */}
          </div> 
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isProSearch:state.isProSearch,
    sp:state.sanpham,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    productSearch: (item) => {
      dispatch({type:"PRODUCT_SEARCH",item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);

