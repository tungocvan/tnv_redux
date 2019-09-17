import React, { Component } from 'react';

class HomeRequestOne extends Component {
    render() {
        return (
            <section className="section-request bg padding-y-sm">
  <div className="container">
    <header className="section-heading heading-line">
      <h4 className="title-section bg text-uppercase">Request for Quotation</h4>
    </header>
    <div className="row">
      <div className="col-md-8">
        <figure className="card-banner banner-size-lg">
          <figcaption className="overlay left">
            <br />
            <h2 style={{maxWidth: '300px'}}>Big boundle or collection of featured items</h2>
            <br />
            <a className="btn btn-warning" href="/">Detail info » </a>
          </figcaption>
          <img alt="anh"  src="images/banners/banner-request.jpg" />
        </figure>
      </div> {/* col // */}
      <div className="col-md-4">
        <div className="card card-body">
          <h5 className="title py-4">One Request, Multiple Quotes.</h5>
          <form>
            <div className="form-group">
              <input className="form-control" name="lname" type="text" />
            </div>
            <div className="form-group">
              <div className="input-group">
                <input className="form-control" name="fname" type="text" />
                <span className="input-group-btn" style={{border: 0, width: 0}} />
                <select className="form-control">
                  <option>Pieces</option>
                  <option>Litres</option>
                  <option>Tons</option>
                  <option>Gramms</option>
                </select>
              </div>
            </div>
            <div className="form-group text-muted">
              <p>Select template type:</p>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue="option1" />
                <span className="form-check-label">Request price</span>
              </label>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue="option2" />
                <span className="form-check-label">Request a sample</span>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-warning">Request for quote</button>
            </div>
          </form>
        </div>
      </div> {/* col // */}
    </div>{/* row // */}
  </div>{/* container // */}
</section>

        );
    }
}

export default HomeRequestOne;