import React, { Component } from 'react';
import { database } from './FireBase';
import {connect} from 'react-redux';
export class WriteInfoIp extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(),info:[],statusKey:''};
      }
      
      componentWillMount() {
          console.log('thuc hien write ip');
          
          if(localStorage.getItem('tblIp')){
              var infoData = JSON.parse(localStorage.getItem('tblIp'));
              this.setState({info:infoData});
          }
      }
      
    componentDidMount() {
        this.tick();
    }
    tick() {
        this.setState({
          date: new Date()
        });
            let loc = this.state.info.loc.split(",");
            let date = JSON.stringify(this.state.date);
            let strDateNow = date.substr(1,10);
           // console.log("strDateNow: "+strDateNow);
            let strTime = this.state.date.getHours()+":"+this.state.date.getMinutes()+":"+this.state.date.getSeconds();
            var info=[];
            info.push(this.state.info.ip);
            info.push(loc[0]);
            info.push(loc[1]);
            info.push(strDateNow);
            info.push(strTime);
            sessionStorage.setItem('statusOnline',this.state.date);
            //info.push(sessionIp);
            this.dataRef = database.ref('tbl_Ip');  
            this.dataRef.on('value', (snapshot) => {
            let infoData = snapshot.val();
            for (const key in infoData) {
                let str = infoData[key][3]; 
                let strDateFire = str.substr(0,10);
                    if(infoData[key][0]===this.state.info.ip && strDateFire===strDateNow){
                            this.setState({statusKey:key})
                            
                    } 
            }
                if(this.state.statusKey) {
                    console.log('Đã cập nhật xong');
                   // sessionStorage.setItem('statusOnline',true);
                    this.dataRef.child(this.state.statusKey).set(info);
                 //   this.props.isWriteIp();
                } else {
                    console.log('Đã cập nhật mới');
                    this.dataRef.push(info);
                  //  this.props.isWriteIp();
                }
            });
     
      }
    render() {
        
        return (
            <div>
                {/* {this.state.date.toLocaleTimeString()} */}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(WriteInfoIp);