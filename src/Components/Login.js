import React, { Component } from 'react';
import {connect} from 'react-redux';
export class Login extends Component {
   
    componentWillMount() {
      this.props.getShow();
    }
    render() {
        return (
          <article className="col-sm-3 mx-auto card mt-5">  
              <article className="card-body text-center mb-5  ">
                <a href="/" className="float-right btn btn-outline-primary">Sign up</a>
                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                <form>
                  <div className="form-group">
                    <label>Your email</label>
                    <input name="email" className="form-control" placeholder="Email" type="email" />
                  </div> {/* form-group// */}
                  <div className="form-group">
                    <a className="float-right" href="/">Forgot?</a>
                    <label>Your password</label>
                    <input name="password" className="form-control" placeholder="******" type="password" />
                  </div> {/* form-group// */} 
                  <div className="form-group"> 
                    <div className="checkbox">
                      <label> <input type="checkbox" /> Save password </label>
                    </div> {/* checkbox .// */}
                  </div> {/* form-group// */}  
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Login</button>
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
