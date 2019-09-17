import React, { Component } from 'react';
import { database } from './FireBase';
// import ReadInfoIp from './ReadInfoIp';
export class FooterBank extends Component {
  
  componentWillMount() {
   // this.readInfo();
    
  }
  constructor(props) {
    super(props);
    this.state = {
      totalUser:'',
      userToday:'',
      userYesterday:'',
      viewToday:'',
      userOnline:false,
      // strTotal:'',
    }
  }
  componentDidMount(){
   
    this.readInfo();
      //this.dataRef.child("totalUser").set(2190);
 
  }
  componentDidUpdate(){
    
  }
  readInfo() {
    let dateNow = JSON.stringify(new Date());    
    let strDateNow = dateNow.substr(1,10);
    this.dataRef = database.ref('tbl_Info/'+strDateNow);  
    this.dataRef.on('value', (snapshot) => {
    let infoData = snapshot.val();
    //console.log('infoData: '+ JSON.stringify(infoData.totalUser));
    // var strTotal = JSON.stringify(infoData.totalUser);
    
    // for(let i=strTotal.length;i<6;i++){
    //    strTotal = '0'+strTotal;
    // }
    // console.log('strTotal: '+strTotal);
    if(infoData){
    this.setState({
        totalUser: infoData.totalUser,  
        userToday:infoData.userToday,
        userYesterday:infoData.userYesterday,
        viewToday:infoData.viewToday,
        // strTotal: strTotal,
    });  
  }
    });

}

    render() {
        
        return (
        <aside className="col-sm-3 col-md-3 white">
        {/* <h5 className="title"> {this.state.strTotal} */}
          {/* <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={'1'} />
          <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={'1'} />
          <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={'0'} />
          <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/3.gif" alt={'3'} />
          <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/2.gif" alt={'2'} />
          <img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/8.gif" alt={'8'} /> */}
        {/* </h5> */}
        <ul className="list-unstyled">
          <li><img alt="anh" src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvcvisit.png" /> Users Today : {this.state.userToday}</li>
          <li><img alt="anh" src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvcyesterday.png" /> Users Yesterday : {this.state.userYesterday}</li>
          <li><img alt="anh" src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvctotal.png" /> Total Users : {this.state.totalUser}</li>
          <li><img alt="anh" src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvctoday.png" /> Views Today : {this.state.viewToday}</li>
          <li>Your IP Address : 1.55.187.15</li>
          {/* <ReadInfoIp /> */}
        </ul>
      </aside>  
    
        );  
    }
}
export default FooterBank;

// <div id="mvcwid" image calculator>
//   <div id="xtvccount"><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={0} /><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={0} /><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/0.gif" alt={0} /><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/3.gif" alt={3} /><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/2.gif" alt={2} /><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/styles/image/calculator/8.gif" alt={8} /></div>
//   <div id="xtvctable">
//     <div id="xtvcvisit" image calculator><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvcvisit.png" /> Users Today : 4</div>
//     <div id="xtvcyesterday" image calculator><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvcyesterday.png" /> Users Yesterday : 7</div>
//     <div id="xtvctotal" image calculator><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvctotal.png" /> Total Users : 328</div>
//     <div id="xtvcviews" image calculator><img src="https://data.dienthoaisoctrang.com/wp-content/plugins/xt-visitor-counter/counter/mvctoday.png" /> Views Today : 9</div>
//   </div>
//   <div id="xtvcip">Your IP Address : 1.55.187.15</div>
// </div>



