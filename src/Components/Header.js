import React, { Component } from 'react';
import {connect} from 'react-redux';
import HeaderBottom from './HeaderBottom';
// import HeaderTop from './HeaderTop';

export class Header extends Component {
  
  componentWillMount() {
    //console.log('Header: '+this.props.isShow);
      if(this.props.isShow===true){
        this.setState({
          isShow:true
        })
      }
      
  }
  
    constructor(props) {
    super(props);
    this.state={
       isProduct:false,
       isShow:false,
    }
  }
  
  getID(event,id){
    event.preventDefault();
    console.log(id);
    if(id > 0) {
      //return <Redirect to="/product" />;
      this.setState({isProduct:true})
    }
  }
    render() {
      if(this.props.isShow===true || this.state.isShow === true) return false;
   
        return (
            <header className="section-header">
            {/* <HeaderTop/> */}
            <HeaderBottom/>
            </header> 

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isShow:state.isShow,
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

