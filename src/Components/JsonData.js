import React, { Component } from 'react';
import axios from 'axios';
export class JsonData extends Component {
  async getData() {
      
    const res = await axios('https://data.dienthoaisoctrang.com/getproductjson/');
    return await res.data;

  }
  constructor(props) {
    super(props);
    this.state ={data:null}
  }
  componentDidMount() {
   // console.log('Đang xữ lý dữ liệu...componentDidMount');
    if (!this.state.data) {
        (async () => {
            try {
                this.setState({data: await this.getData()});
            } catch (e) {
                //...handle the error...
            }
        })();
    }
  }
  getHome(){
   // console.log('Home: '+this.state.data);
    localStorage.setItem('sp',JSON.stringify(this.state.data));
    return window.location.reload();
  }
  render() {
    if(this.state.data===null){
        document.write("<h2>Đang nạp dữ liệu xin chờ giây lát....</h2>")
    }
    else {
    //    console.log('Đã xữ lý xong dữ liệu trong JsonData');
        this.getHome();
    }
    return (
      <div>
       
      </div>
    );
  }
}
export default JsonData;
