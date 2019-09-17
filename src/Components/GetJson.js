import React, { Component } from 'react';
import HomeMain from './HomeMain';
import HomeContentOne from './HomeContentOne';
import HomeContentTwo from './HomeContentTwo';
import HomeRequestOne from './HomeRequestOne';
import HomeRequestTwo from './HomeRequestTwo';
import HomeLinks from './HomeLinks';
import HomeSubscribe from './HomeSubscribe';
import {connect} from 'react-redux';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export class Home extends Component {
  
    componentWillMount(){
       if(localStorage.getItem('ProductJson')){
          this.setState({
            ProductJson:JSON.parse(localStorage.getItem('ProductJson'))
          });
       }   
    }
    constructor(props) {
        super(props);
        this.state={
            ProductJson:JSON.parse(this.props.ProductJson)
        }   

    }
    
    getHomeMain(){
         
       // let kq = this.props.ProductJson.filter((person) => (if(person.id> 18) person));
      // console.log(kq);
      return this.state.ProductJson.filter(value => value.id >= 2149);
      //console.log(kq);
    }
    getHomeContentOne(){
           return this.state.ProductJson.filter(value => value.cateProduct[0] === "PHỤ KIỆN ZIN");
    }
    getHomeContentTwo(){
      return this.state.ProductJson.filter(value => value.cateProduct[0] === "APPLE IPHONE");
    }
    getHomeRequestTwo(){
      return this.state.ProductJson.filter(value => value.cateProduct[0] === "APPLE IPHONE" || value.cateProduct[0] === "APPLE WATCH");
    }
    render() {
  
      if(!localStorage.getItem('ProductJson')){
        return 0;        
      }
        
         
         return (
            <div>
               <HomeMain/>
               <HomeContentOne getHomeContentOne={this.getHomeContentOne()}/>
               {/* <HomeContentTwo getHomeContentTwo={this.getHomeContentTwo()}/>
               <HomeRequestOne/>
               <HomeRequestTwo getHomeRequestTwo={this.getHomeRequestTwo()}/>
               <HomeLinks/>
               <HomeSubscribe/>  */}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
      isUpdate:state.isUpdate,
      ProductJson:state.ProductJson
    }
  }

export default connect(mapStateToProps)(Home);
