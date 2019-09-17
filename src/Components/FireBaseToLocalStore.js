import React, { Component } from 'react';
import { database } from './FireBase';
export class FireBaseToLocalStore extends Component {
  constructor(props) {
    super(props);
    this.state={
       status:false
    }
  }
  
  getFireBaseToLocalStore(tbl,store){
    // gọi hàm này trong: componentDidMount
    this.dataRef = database.ref(tbl);
    this.dataRef.on('value', (snapshot) => {
      localStorage.setItem(store,JSON.stringify(snapshot.val()));
      // this.dataRef = database.ref('upDate');
      // this.dataRef.set(1);
      return window.location.reload();
    });
    // this.dataRef = database.ref('upDate');
    // this.dataRef.set(1);
     
    }   
        
  componentDidMount() {
   
  }
  render() {
    // if(!localStorage.getItem('sp')){
      if(this.props.tbl!==null && this.props.store!==null){
          this.getFireBaseToLocalStore(this.props.tbl,this.props.store);
        //  this.setState({status:true});
      }
    // }
  
    return (
      <div>
          
      </div>
    );
  }
}
export default FireBaseToLocalStore;
