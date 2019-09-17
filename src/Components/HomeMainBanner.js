import React, { Component } from 'react';

class HomeMainBanner extends Component {
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
             if(spData[key].slug.substr(0, 6)==="banner") {
                imgData.push(spData[key].img);
             }             
           }
       //   console.log('imgData:'+JSON.stringify(imgData));
           this.setState({
            imgSlider:imgData
           })
         }
      }
    render() {
        return (
          <div style={{marginTop:2}}>
            {/* <img  className="d-block w-100" src={this.state.imgSlider} alt="Second slide" /> */}
            <img  className="d-block w-100" src="https://azshopweb.com/khachhang/upload/uploads/banner.png" alt="Second slide" />
          </div>
        );
    }
}

export default HomeMainBanner;