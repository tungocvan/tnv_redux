import React, { Component } from 'react';
import axios from 'axios';
import { database } from './FireBase';
export class JsonDataToFireBase extends Component {
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
  upDateFireBase(tbl,item,storage){
   // return window.location.reload();
   try {
    this.dataRef = database.ref(tbl);
    this.dataRef.set(item);
    if(storage!==null){
        localStorage.setItem(storage, JSON.stringify(item));
    }
    this.dataRef = database.ref('upDate');
    this.dataRef.set(1);
    console.log('Cập nhật database thành công');
    alert('Cập nhật thành công');
    window.location.reload();
   } catch (error) {
       
   }
    
  }

  render() {
      
    if(this.state.data===null){
 
    }
    else {
    // console.log('Đã xữ lý xong dữ liệu trong State');
    // cập nhật vào database của FireBase
        this.upDateFireBase(this.props.tbl,this.state.data,this.props.store);
    }
    return (
      <div>
          
      </div>
    );
  }
}
export default JsonDataToFireBase;
