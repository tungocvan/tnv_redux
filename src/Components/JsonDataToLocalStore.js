import React, { Component } from 'react';
import axios from 'axios';
// import { database } from './FireBase';
export class JsonDataToLocalStore extends Component {
    constructor(props) {
        super(props);
        this.state ={data:null,}
        }  
    async getData(url) {
        const res = await axios(url);
        return await res.data;
    }
    upDateState(url){
        if (!this.state.data) {
            (async () => {
                try {
                    this.setState({data: await this.getData(url)});
                } catch (e) {
                    //...handle the error...
                }
            })();
        }
    }
  componentDidMount() {
      this.upDateState(this.props.url);
  }
  upDate(item,storage){
   // return window.location.reload();
   try {
        if(storage!==null){
          localStorage.setItem(storage, JSON.stringify(item));
        }
        console.log('Cập nhật storage thành công');
   } catch (error) {
       
   }
    
  }

  render() {
      
    if(this.state.data===null){
 
    }
    else {
        this.upDate(this.state.data,this.props.store);
    }
    return (
      <div>
          
      </div>
    );
  }
}
export default JsonDataToLocalStore;
