import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Components/Home';

export class App extends Component {
  _onAdd(){
    //console.log(this.props.name+"-"+this.props.age);
    var item = ['item1','item2','item3'];
    console.log(this.props.addData(item));
  //  console.log(this.props.name+"-"+this.props.age);
  //  console.log(this.props.color);    
  }  
  _onEdit(){
    //console.log(this.props.name+"-"+this.props.age);
    var item = ['item4','item5','item6'];
    console.log(this.props.getData(item));
    console.log(this.props.name+"-"+this.props.age);
    console.log(this.props.color);    
    console.log(this.props.sothich); 
  }  
  _inColor(){
    let mausac = this.props.color;
    console.log(mausac.length);

  }
  render() {
  
    return (
      <BrowserRouter>
      <div>
         <p>Test State from Store</p>
         <p>Name : {this.props.name} </p>
         <p>Age : {this.props.age} </p>
         {this._inColor()}
         <button type="button" onClick = {()=>this._onAdd()}>
          Add Data
        </button>
        <button type="button" onClick = {()=>this._onEdit()}>
          Get Data
        </button>
      </div>
       <Route component={Home} exact path="/"></Route>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.name,
    age: state.age,
    color:state.color,
    sothich:state.sothich
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addData: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    },
    getData: (getItem) => {
      dispatch({type:"getData",getItem})
    }
  }
}
// this.props.addData()

export default connect(mapStateToProps, mapDispatchToProps)(App);
