import React, { Component } from 'react';

export class HomeMainSlider extends Component {
    constructor(props) {
      super(props);
      this.state ={
        imgSlider:[],
      }
    }
    
    componentWillMount() {
       if(localStorage.getItem('sp')){
         var imgData=[];
         var spData = JSON.parse(localStorage.getItem('sp'));
         for (const key in spData) {
           if(spData[key].slug.substr(0, 6)==="slider") {
              imgData.push(spData[key].img);
           }             
         }
     //    console.log('imgData:'+JSON.stringify(imgData));
         this.setState({
          imgSlider:imgData
         })
       }
    }
    
    getSlider(){
      return (
        <div className="col-md-12">
          <div id="carousel1_indicator" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel1_indicator" data-slide-to={0} className="active" />
          <li data-target="#carousel1_indicator" data-slide-to={1} />
          <li data-target="#carousel1_indicator" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  className="d-block w-100" src="https://data.dienthoaisoctrang.com/wp-content/uploads/2018/06/Ban_01-1-780x388.jpg" alt="First slide" /> 
          </div>
          <div className="carousel-item">
            <img   className="d-block w-100" src="https://data.dienthoaisoctrang.com/wp-content/uploads/2018/06/Ban_02-1-780x388.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img  className="d-block w-100" src="https://data.dienthoaisoctrang.com/wp-content/uploads/2017/10/Ban_03-1-780x388.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        </div>
        </div> 
      )
    }
    render() {
      //console.log('slider'+ this.state.imgSlider);
      
        return (
          
          <div className="col-md-6">
          <div id="carousel1_indicator" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel1_indicator" data-slide-to={0} className="active" />
          <li data-target="#carousel1_indicator" data-slide-to={1} />
          <li data-target="#carousel1_indicator" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  className="d-block w-100" src="https://azshopweb.com/khachhang/upload/uploads/banner1.png" alt="First slide" /> 
          </div>
          <div className="carousel-item">
            <img   className="d-block w-100" src="https://azshopweb.com/khachhang/upload/uploads/banner2.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img  className="d-block w-100" src="https://azshopweb.com/khachhang/upload/uploads/banner3.png" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img  className="d-block w-100" src="https://azshopweb.com/khachhang/upload/uploads/banner4.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        </div>
        </div> 
          
        );
    }
}

export default HomeMainSlider;
