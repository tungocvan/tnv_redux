import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
class FooterOneDetails extends Component {
     
    componentWillMount() {
        // console.log('Details:'+this.props.itemProduct);
       // console.log('ton tai this.props.footerOne '+ this.props.footerOne);
           
       }
    componentDidMount(){
        // if(this.props.footerOne){
        //     console.log('ton tai');
             
        //    this.setState({
        //       item:this.props.footerOne,
        //    })
        //  }
    }   
         constructor(props) {    
           super(props);
           this.state={
              item:null,
             }
         }
    
         showItem(items){
          //  var items = this.state.item;
            //console.log('items: '+ JSON.stringify(items[0].title));
              var content = items[0].content;
             // document.getElementById('myDiv').innerHTML = content;

             return (
                <section className="section-content bg padding-y-sm">
                <div className="container">

                  <div className="row">
                  <a href="/"><h5>Về Trang chủ</h5></a> 
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      {/* PRODUCT DETAIL */}
                      <article className="card mt-3">
                        <div className="card-body">
                          <h4>{items[0].title}</h4>
                          <p>{ReactHtmlParser(content)} </p>      
                        </div> {/* card-body.// */}
                      </article> {/* card.// */}
                      {/* PRODUCT DETAIL .// */}
                    </div> {/* col // */}
                 
                  </div> {/* row.// */}
                </div>{/* container // */}
              </section>
              
                  )
    
        
        }
    
    render() {
 
        if(this.props.isFooterOne===false ) return false;
        
      //  console.log("sanpham: "+ localStorage.getItem('sp'));
      //console.log('productSearch: '+ JSON.stringify(this.props.productSearch[0].cateProduct));
        console.log('FooterOneDetails: '+ JSON.stringify(this.props.footerOne));
        
        return (
            <div>
              {this.showItem(this.props.footerOne)}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      isFooterOne: state.isFooterOne,
      footerOne: state.footerOne,
      isPro:state.isProduct,
      isHome:state.isHome,
    }
  }
  // this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getFooterOne: (item) => {
        dispatch({type:"FOOTER_ONE",item})
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FooterOneDetails);  

