import React, { Component } from 'react';

class HeaderMenuRight extends Component {
    render() {
        return (
            
      <div className="col-lg-9-24 col-sm-12">
      <div className="widgets-wrap float-right row no-gutters py-1">
        <div className="col-auto">
          <div className="widget-header dropdown">
            <a href="/" data-toggle="dropdown" data-offset="20,10">
              <div className="icontext">
                <div className="icon-wrap"><i className="text-warning icon-sm fa fa-user" /></div>
                <div className="text-wrap text-dark">
                  Sign in <br />
                  My account <i className="fa fa-caret-down" /> 
                </div>
              </div>
            </a>
            <div className="dropdown-menu">
              <form className="px-4 py-3">
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
              <hr className="dropdown-divider" />
              <a className="dropdown-item" href="/">Have account? Sign up</a>
              <a className="dropdown-item" href="/">Forgot password?</a>
            </div> {/*  dropdown-menu .// */}
          </div>  {/* widget-header .// */}
        </div> {/* col.// */}
        <div className="col-auto">
          <a href="/" className="widget-header">
            <div className="icontext">
              <div className="icon-wrap"><i className="text-warning icon-sm fa fa-shopping-cart" /></div>
              <div className="text-wrap text-dark">
                Order <br /> Protection 
              </div>
            </div>
          </a>
        </div> {/* col.// */}
        <div className="col-auto">
          <a href="/" className="widget-header">
            <div className="icontext">
              <div className="icon-wrap"><i className="text-warning icon-sm  fa fa-heart" /></div>
              <div className="text-wrap text-dark">
                <span className="small round badge badge-secondary">0</span>
                <div>Favorites</div>
              </div>
            </div>
          </a>
        </div> {/* col.// */}
      </div> {/* widgets-wrap.// row.// */}
    </div>  

        );
    }
}

export default HeaderMenuRight;