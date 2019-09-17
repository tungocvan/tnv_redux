import React, { Component } from 'react';
import {connect} from 'react-redux';
import { database } from './FireBase';
import WriteInfoIp from './WriteInfoIp';
export class Lock extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0, status:false};
      }
      
      componentWillMount() {
     
      }
      
    componentDidMount() {
     //   this.setState({status:false});
        this.timerID = setInterval(
          () => this.tick(),
          30*1000
        );
    }
    tick() {
        this.setState(prevState => ({
          count: this.state.count +1,
        }));
        console.log('count: '+this.state.count);
        // nếu this.state.count % 30 ===0 thì thực hiện
        if(this.state.count % 2===0){
            console.log('Cap nhat lai sau 30s');
            //this.props.isWriteIp();
            this.setState({status:true});
        }
    }
    getWriteIp(){
        if(this.state.status===true){
           // console.log('WriteInfoIp');
           // this.props.isWriteIp();
            // return (
            //   <WriteInfoIp />
            // )
        }
      }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
    
        return (
            <div>
                {this.getWriteIp()}
                {/* {this.state.date.toLocaleTimeString()}
                <JsonDataToFireBase url='http://azshopweb.com/json/ip.php' tbl='tbl_Ip' store='tblIp' /> */}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isWriteIp:state.isWriteIp,
    }
  }
  // this.props.testStore
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      isWriteIp: () => {
        dispatch({type:"IS_WRITE_IP"})
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Lock);