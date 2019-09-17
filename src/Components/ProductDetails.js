import React, { Component } from 'react';
import formatMoney from './Function';
import ReactHtmlParser from 'react-html-parser';

export class ProductDetails extends Component {
  
  componentWillMount() {
   // console.log('Details:'+this.props.itemProduct);
    
      if(this.props.itemProduct){
        this.setState({
          item:this.props.itemProduct,
          imgLon:this.props.itemProduct[0].img,
        })
      }
  }
  
    constructor(props) {    
      super(props);
      this.state={
         item:null,
         imgLon:'',
        }
    }
    getImage(imgData){
      console.log("imgData: "+imgData);
        if(imgData){
        return imgData.map((value,key)=>{
           
           
           return (
              <div key={key} className="item-gallery"> 
                <a href="/" onClick={(event)=>this.getID(event,value)}>
                  <img alt="anh"  src={value} />
                </a>
                {/* <div className="modal" id={myModel}>
                  <div className="modal-body">
                    <img alt="anh"  src={value} />
                  </div>
                </div>  */}
              </div>
           )
        })
      }
    }
    getID(event,id){
      event.preventDefault();
      console.log(id);
      this.setState({
        imgLon:id
      })
    }
    showItem(){
        var items = this.state.item;
    console.log(items);
        return items.map((value,key)=>{
              
              return (
            <section key={key} className="section-content bg padding-y-sm">
            <div className="container">
            <a href="/"><h5>Về Trang chủ</h5></a>
{/* 
              <nav className="mb-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="/">Category name</a></li>
                  <li className="breadcrumb-item"><a href="/">Sub category</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Items</li>
                </ol> 
              </nav>
              */}
              <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <main className="card">
                    <div className="row no-gutters">
                      <aside className="col-sm-6 border-right">
                        <article className="gallery-wrap"> 
                          <div className="img-big-wrap">
                            <div> <a href="/" onClick={(event)=>this.getID(event,value.img)}><img alt="anh"  src={this.state.imgLon} /></a></div>
                          </div> {/* slider-product.// */}
                          <div className="img-small-wrap">
                          {this.getImage(value.gallery_image)}
                            {/* <div className="item-gallery"> <img alt="anh"  src="images/items/1.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/2.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/3.jpg" /></div>
                            <div className="item-gallery"> <img alt="anh"  src="images/items/4.jpg" /></div> */}
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
                            {/* <span>/per kg</span>  */}
                          </div> {/* price-detail-wrap .// */}
                          <dl>
                            <dt>Description</dt>
                            <dd>{ReactHtmlParser(value.short_description)}</dd>
                          </dl>
                          <dl className="row">
                            <dt className="col-sm-3">Model#</dt>
                            <dd className="col-sm-9">{value.sku}</dd>
                            {/* <dt className="col-sm-3">Color</dt>
                            <dd className="col-sm-9">Black and white </dd>
                            <dt className="col-sm-3">Delivery</dt>
                            <dd className="col-sm-9">Russia, USA, and Europe </dd> */}
                          </dl>
                          
                          <div className="rating-wrap">
{/* 
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
                             */}
                            {/* <div className="label-rating">132 reviews</div>
                            <div className="label-rating">154 orders </div> */}
                          </div> {/* rating-wrap.// */}
                         
                          {/* <hr />
                          <div className="row"> */}
                         
                            {/* <div className="col-sm-5">
                              <dl className="dlist-inline">
                                <dt>Quantity: </dt>
                                <dd> 
                                  <select className="form-control form-control-sm" style={{width: '70px'}}>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                  </select>
                                </dd>
                              </dl>  
                            </div>  */}
{/*                          
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
                              </dl>  
                            </div> 
                          */}
                          {/* </div>  */}
                          {/* <hr />
                          <a href="/" className="btn  btn-warning"> <i className="fa fa-envelope" /> Contact Supplier </a>
                          <a href="/" className="btn  btn-outline-warning"> Start Order </a>
             */}
                        </article> {/* card-body.// */}
                      </aside> {/* col.// */}
                    </div> {/* row.// */}
                  </main> {/* card.// */}
                  {/* PRODUCT DETAIL */}
                  <article className="card mt-3">
                    <div className="card-body">
                      <h4>Detail overview</h4>
                      <p>{ReactHtmlParser(value.content)}</p>
                    </div> {/* card-body.// */}
                  </article> {/* card.// */}
                  {/* PRODUCT DETAIL .// */}
                </div> {/* col // */}
             
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
