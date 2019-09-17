import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Home from './Home';
import ProductSearch from './ProductSearch';
import FooterOneDetails from './FooterOneDetails';
import Footer from './Footer';
export class FrontEnd extends Component {
    componentWillMount() {
       // console.log('FrontEnd: '+this.props.isShow);
          if(this.props.isShow===true){
            this.setState({
              isShow:true
            })
          }
          
      }
      
        constructor(props) {
        super(props);
        this.state={
            isShow:false,
        }
      }
    render() {
      //  if(this.state.isShow === true) return false;
        return (
            <div>
                <Header/> 
                <Home/>
                <ProductSearch/>
                <FooterOneDetails/>
                <Footer/>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FrontEnd);