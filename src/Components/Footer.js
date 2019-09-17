import React, { Component } from 'react';
import {connect} from 'react-redux';
import FooterCol from './FooterCol';
import { FooterInfo } from './FooterInfo';
import FooterBank from './FooterBank';
import FooterButton from './FooterButton';

export class Footer extends Component {
  componentWillMount() {
    //console.log('footer: '+this.props.isShow);
      
}

  constructor(props) {
  super(props);
  this.state={
     isShow:false,
  }
}
    render() {
      if(this.props.isShow===true || this.state.isShow === true) return false;
        return (
            <footer className="section-footer" style={{backgroundColor:'#610703'}}>
  <div className="container">
    <section className="footer-top padding-top">
      <div className="row">
        <FooterCol/>  
        <FooterBank/>
        <FooterInfo/>
        <FooterButton/>
      </div> {/* row.// */}
      <br /> 
    </section>
    
  </div>{/* //container */}
</footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
