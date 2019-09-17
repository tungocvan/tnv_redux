import React, { Component } from 'react';
import formatMoney from './Function';
export class ProductDetails extends Component {
  
  componentWillMount() {
   // console.log('Details:'+this.props.itemProduct);
    
      if(this.props.itemProduct){
        this.setState({
          item:this.props.itemProduct
        })
      }
  }
  
    constructor(props) {    
      super(props);
      this.state={
         item:null,
        }
    }
    showItem(){
        var items = this.state.item;
      //  console.log(items);
        return items.map((value,key)=>{
              return (
            <section key={key} className="section-content bg padding-y-sm">
            <div className="container">
              <nav className="mb-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="/">Category name</a></li>
                  <li className="breadcrumb-item"><a href="/">Sub category</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Items</li>
                </ol> 
              </nav>
              <div className="row">
                <div className="col-xl-10 col-md-9 col-sm-12">
                  <main className="card">
                    <div className="row no-gutters">
                      <aside className="col-sm-6 border-right">
                        <article className="gallery-wrap"> 
                          <div className="img-big-wrap">
                            <div> <a href="images/items/1.jpg"><img alt="anh"  src={value.img} /></a></div>
                          </div> {/* slider-product.// */}
                          <div className="img-small-wrap">
                            <div className="item-gallery"> <img alt="anh"  src="images/items/1.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/2.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/3.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/4.jpg" /></div>
                          </div> {/* slider-nav.// */}
                        </article> {/* gallery-wrap .end// */}
                      </aside>
                      <aside className="col-sm-6">
                        <article className="card-body">
                          {/* short-info-wrap */}
                          <h3 className="title mb-3">{value.title}</h3>
                          <div className="mb-3"> 
                            <var className="price h3 text-warning"> 
                              <span className="currency">VNĐ </span><span className="num">{formatMoney(value.price,0)}</span>
                            </var> 
                            <span>/per kg</span> 
                          </div> {/* price-detail-wrap .// */}
                          <dl>
                            <dt>Description</dt>
                            <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco </p></dd>
                          </dl>
                          <dl className="row">
                            <dt className="col-sm-3">Model#</dt>
                            <dd className="col-sm-9">12345611</dd>
                            <dt className="col-sm-3">Color</dt>
                            <dd className="col-sm-9">Black and white </dd>
                            <dt className="col-sm-3">Delivery</dt>
                            <dd className="col-sm-9">Russia, USA, and Europe </dd>
                          </dl>
                          <div className="rating-wrap">
                            <ul className="rating-stars">
                              <li style={{width: '80%'}} className="stars-active"> 
                                <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                <i className="fa fa-star" /> 
                              </li>
                              <li>
                                <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                <i className="fa fa-star" /> <i className="fa fa-star" /> 
                                <i className="fa fa-star" /> 
                              </li>
                            </ul>
                            <div className="label-rating">132 reviews</div>
                            <div className="label-rating">154 orders </div>
                          </div> {/* rating-wrap.// */}
                          <hr />
                          <div className="row">
                            <div className="col-sm-5">
                              <dl className="dlist-inline">
                                <dt>Quantity: </dt>
                                <dd> 
                                  <select className="form-control form-control-sm" style={{width: '70px'}}>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                  </select>
                                </dd>
                              </dl>  {/* item-property .// */}
                            </div> {/* col.// */}
                            <div className="col-sm-7">
                              <dl className="dlist-inline">
                                <dt>Size: </dt>
                                <dd>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" type="radio" />
                                    <span className="form-check-label">SM</span>
                                  </label>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" type="radio" />
                                    <span className="form-check-label">MD</span>
                                  </label>
                                  <label className="form-check form-check-inline">
                                    <input className="form-check-input" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" type="radio" />
                                    <span className="form-check-label">XXL</span>
                                  </label>
                                </dd>
                              </dl>  {/* item-property .// */}
                            </div> {/* col.// */}
                          </div> {/* row.// */}
                          <hr />
                          <a href="/" className="btn  btn-warning"> <i className="fa fa-envelope" /> Contact Supplier </a>
                          <a href="/" className="btn  btn-outline-warning"> Start Order </a>
                          {/* short-info-wrap .// */}
                        </article> {/* card-body.// */}
                      </aside> {/* col.// */}
                    </div> {/* row.// */}
                  </main> {/* card.// */}
                  {/* PRODUCT DETAIL */}
                  <article className="card mt-3">
                    <div className="card-body">
                      <h4>Detail overview</h4>
                      <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi deserunt mollit anim id est laborum.</p>
                      <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteurididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> {/* card-body.// */}
                  </article> {/* card.// */}
                  {/* PRODUCT DETAIL .// */}
                </div> {/* col // */}
             
                <aside className="col-xl-2 col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      Trade Assurance
                    </div>
                    <div className="card-body small">
                      <span>China | Trading Company</span> 
                      <hr />
                      Transaction Level: Good <br /> 
                      Supplier Assessments: Best 
                      <hr />
                      11 Transactions $330,000+
                      <hr />
                      Response Time 24h <br />
                      Response Rate: 94%  <br /> 
                      <hr />
                      <a href="/">Visit pofile</a>
                    </div> {/* card-body.// */}
                  </div> {/* card.// */}
                  <div className="card mt-3">
                    <div className="card-header">
                      You may like
                    </div>
                    <div className="card-body row">
                      <div className="col-md-12 col-sm-3">
                        <figure className="item border-bottom mb-3">
                          <a href="/" className="img-wrap"> <img alt="anh"  src="images/items/2.jpg" className="img-md" /></a>
                          <figcaption className="info-wrap">
                            <a href="/" className="title">The name of product</a>
                            <div className="price-wrap mb-3">
                              <span className="price-new">$280</span> <del className="price-old">$280</del>
                            </div> {/* price-wrap.// */}
                          </figcaption>
                        </figure> {/* card-product // */}
                      </div> {/* col.// */}
                      <div className="col-md-12 col-sm-3">
                        <figure className="item border-bottom mb-3">
                          <a href="/" className="img-wrap"> <img alt="anh"  src="images/items/3.jpg" className="img-md" />-</a>
                          <figcaption className="info-wrap">
                            <a href="/" className="title">The name of product</a>
                            <div className="price-wrap mb-3">
                              <span className="price-new">$280</span>
                            </div> {/* price-wrap.// */}
                          </figcaption>
                        </figure> {/* card-product // */}
                      </div> {/* col.// */}
                      <div className="col-md-12 col-sm-3">
                        <figure className="item border-bottom mb-3">
                          <a href="/" className="img-wrap"> <img alt="anh"  src="images/items/4.jpg" className="img-md" /></a>
                          <figcaption className="info-wrap">
                            <a href="/" className="title">The name of product</a>
                            <div className="price-wrap mb-3">
                              <span className="price-new">$280</span>
                            </div> {/* price-wrap.// */}
                          </figcaption>
                        </figure> {/* card-product // */}
                      </div> {/* col.// */}
                    </div> {/* card-body.// */}
                  </div> {/* card.// */}
                </aside> {/* col // */}
             
              </div> {/* row.// */}
            </div>{/* container // */}
          </section>
          
              )

         });
    }
    render() {
        
        //console.log('Product Detial');
        // console.log(this.state.item);
        // console.log(typeof(this.state.idProduct));
      
        return (
          <div>
            {this.showItem()}
          </div>  
        );
    }
}

export default ProductDetails;
