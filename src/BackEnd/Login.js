import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { database } from '../Components/FireBase';
export class Login extends Component {
   
    componentWillMount() {
      this.props.getShow();
    }
    constructor(props) {
      super(props);
      this.state ={
        isLogin:false
      }
    }
    isChange = (event) => {
      const ten = event.target.name;
      const giatri = event.target.value;
      // console.log(ten);
      // console.log(giatri);
      this.setState({
        [ten]:giatri
      });
            
    }
    _checkLogin(event){
      event.preventDefault();
      var status = false;
    console.log('Xữ lý login');
    console.log(this.state);
    this.dataRef = database.ref('tbl_user');
    this.dataRef.on('value',(dulieu) => {
      console.log('user:'+ JSON.stringify(dulieu.val()));
      for (const key in dulieu.val()) {
          let email = dulieu.val()[key].email;
          let password = dulieu.val()[key].password;
          console.log('email: '+email);
          console.log('password: '+password);
          
          
          if(email===this.state.email && password===this.state.password){
            console.log('Có TK');
            sessionStorage.setItem('isLogin',true);
            this.setState({isLogin:true})
          //  return <Redirect to="/Admin" />;
           // status =true;
            break;
          }
      }  
      //console.log("status "+ status);
      if(status === true) {
          //this.props.isHomeFunc();  
          console.log('status:'+status);
          
          return <Redirect to="/Admin" />; 
          // this.props.getShow();
          // this.setState({isLogin:true})
      }
    });
    }
    componentDidUpdate(){
      // if(this.state.isLogin===true){
      //   return <Redirect to="/Admin" />; 
      // }
    }
    render() {
        if(this.state.isLogin===true){
        return <Redirect to="/Admin" />; 
      }
        return (
          <article className="col-sm-3 mx-auto card mt-5">  
              <article className="card-body text-center mb-5  ">
                <a href="/" className="float-right btn btn-outline-primary">Sign up</a>
                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                <form>
                  <div className="form-group">
                    <label>Your email</label>
                    <input onChange={(event)=>this.isChange(event)} name="email" className="form-control" placeholder="Email" type="email" />
                  </div> {/* form-group// */}
                  <div className="form-group">
                    <a className="float-right" href="/">Forgot?</a>
                    <label>Your password</label>
                    <input onChange={(event)=>this.isChange(event)} name="password" className="form-control" placeholder="******" type="password" />
                  </div> {/* form-group// */} 
                  <div className="form-group"> 
                    <div className="checkbox">
                      <label> <input onChange={(event)=>this.isChange(event)} name="savePass" type="checkbox" /> Save password </label>
                    </div> {/* checkbox .// */}
                  </div> {/* form-group// */}  
                  <div className="form-group">
                    <button type="submit"  onClick={(event)=>this._checkLogin(event)} className="btn btn-primary btn-block"> Login</button>
                  </div> {/* form-group// */}                                                           
                </form>
              </article>
          </article>

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
    getShow: () => {
      dispatch({type:"IS_SHOW"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
