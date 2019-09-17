import React, { Component } from 'react';
import { database } from './FireBase';
export class ReadInfoIp extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(),};
      }
       
      componentWillMount() {
    
      }
      
    componentDidMount() {
        this.tick();
    }
    tick() {
            let date = JSON.stringify(this.state.date);
            var strDateNow = date.substr(1,10); // lấy ngày tháng hôm nay
            // lấy ngày tháng hôm qua 
     //       let prevDate = this.state.date - 1;
     //       console.log('prevDate: '+ prevDate)  ;
                

            this.dataRef = database.ref('tbl_Ip');  
            this.dataRef.on('value', (snapshot) => {
            let infoData = snapshot.val();
            var countIP = 0;
            for (const key in infoData) {
              // console.log('count:'+infoData.length);
               // console.log(infoData[key][3]);
           //    let dateObj = Date.parse(infoData[key][3]);
            //   var mydate = new Date(infoData[key][3]);
              // console.log("date firbase: " + dateFull.getDate());
            //  console.log(mydate.toDateString());
            // str.substr(1, 2)
        //       let str = infoData[key][3];
             //  console.log(str.substr(1,10));
            //   let strDate = str.substr(1,10);
         //      let myDate = new Date(strDate);
              // console.log(myDate.getDate());
        //      let dateNow = this.state.date.getDate();
           //   console.log(dateNow);
               let str = infoData[key][3]; 
               let strDate = str.substr(0,10);
               console.log("strDate Read: " + strDate);
               console.log('strDateNow: '+strDateNow);
                
               countIP = countIP + 1;
            }
            console.log("User Today: "+countIP);
            
            });
     
      }
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default ReadInfoIp;
