import React, { Component } from 'react';
import { database } from './FireBase';
export class WriteInfoUser extends Component {
    constructor(props) {
        super(props);
        this.state= {
            userToday:'',
            totalUser:'',
            viewToday:'',
            userYesterday:'',
            userOnline:false,
            dayNew:false,
        }
    }
    
    componentWillMount() {
        
    }

    getDayOne(){
        this.dataRef = database.ref('tbl_Info');  
        this.dataRef.on('value', (snapshot) => {
            let infoData = snapshot.val();
            let count = parseInt(Object.keys(infoData).length);
            let currentDay = Object.keys(infoData)[count-1] ;
            let dateNow = JSON.stringify(new Date());    
            let strDateNow = dateNow.substr(1,10);
           // console.log('current: '+ currentDay);
            
            
            if(count===0){
                // cập nhật mới đầu tiên
                let dateNow = JSON.stringify(new Date());    
                let strDateNow = dateNow.substr(1,10);
                this.dataRef = database.ref('tbl_Info/'+strDateNow); 
                this.dataRef.set({"userToday":1,"totalUser":1,"viewToday":1,"userYesterday":0});    
            }
            if(count > 0 && currentDay !==strDateNow)
            {
               // console.log('current < 0: '+ currentDay);     
               let len = parseInt(Object.keys(infoData).length)-1;
               let strBeforeDay = Object.keys(infoData)[len];
           //    console.log('strBeforeDay: '+strBeforeDay);
               this.dataRef = database.ref('tbl_Info/'+strBeforeDay);  
               this.dataRef.on('value', (snapshot) => {
                 let infoData = snapshot.val(); 
                 if(infoData){
            //        console.log('count Write: '+ infoData);
                 this.setState({
                    userToday:1,
                    totalUser:infoData.totalUser+1,
                    viewToday:1,
                    userYesterday:infoData.userToday,
                    userOnline:true,
                });  
              }
            }) 
            }
            if(count > 0 && currentDay ===strDateNow)
            {
                this.dataRef = database.ref('tbl_Info/'+strDateNow);  
                this.dataRef.on('value', (snapshot) => {
                  let infoData = snapshot.val(); 
                  if(infoData){
             //        console.log('count Write: '+ infoData);
                  this.setState({
                     userToday:infoData.userToday+1,
                     totalUser:infoData.totalUser+1,
                     viewToday:infoData.viewToday+1,
                     userYesterday:infoData.userYesterday,
                     userOnline:true,
                 });  
               }
             }) 
                
            }
        })
    }

    getDayNew(){
        let dateNow = JSON.stringify(new Date());    
        let strDateNow = dateNow.substr(1,10);
        this.dataRef = database.ref('tbl_Info');  
        this.dataRef.on('value', (snapshot) => {
            let infoData = snapshot.val();
            for (const key in infoData) {
                if(key===strDateNow){
                   this.setState({
                       dayNew:true,
                   })
                   return 1;
                }        
           }
           this.setState({
            dayNew:false,
            })
           return 0;
        })     
    }
    getSessionUser(){
        this.getDayNew();
       // console.log('Kiem tra: '+ this.state.dayNew);
        
        if(!sessionStorage.getItem('userOnline')){
            sessionStorage.setItem('userOnline',true);
            let dateNow = JSON.stringify(new Date());    
            let strDateNow = dateNow.substr(1,10);
            this.dataRef = database.ref('tbl_Info/'+strDateNow);  
            this.dataRef.on('value', (snapshot) => {
                 let infoData = snapshot.val(); 
                 this.setState({
                    userToday:infoData.userToday+1,
                    totalUser:infoData.totalUser+1,
                    viewToday:infoData.viewToday+1,
                    userYesterday:infoData.userYesterday,
                    userOnline:true,
                    count:0,
                 });  
              
            })
        }
    }
    componentDidMount(){
        //this.getSessionUser();
   //     console.log('componentDidMount1');
         this.getDayOne();
  //       console.log('componentDidMount2');
         
    }
    writeUserInfo(user){
     //   console.log('writeUserInfo');
        
        // if(user.userOnline===true){
            if(!sessionStorage.getItem('userOnlineStatus')){
            sessionStorage.setItem('userOnlineStatus',true);
       //     console.log('user: '+JSON.stringify(user));
            let dateNow = JSON.stringify(new Date());    
            let strDateNow = dateNow.substr(1,10);
            this.dataRef = database.ref('tbl_Info/'+strDateNow); 
            this.dataRef.child("userToday").set(user.userToday);  
            this.dataRef.child("totalUser").set(user.totalUser);  
            this.dataRef.child("viewToday").set(user.viewToday);  
            this.dataRef.child("userYesterday").set(user.userYesterday);  
            //this.dataRef.set({"userToday":user.userToday,"totalUser":user.totalUser,"viewToday":user.viewToday,"userYesterday":user.userToday});
            }    
        // }
        
    }
    componentDidUpdate(){
        // console.log('kiem tra lai: '+this.state.dayNew);
        // if(this.state.dayNew===false){
            // let beforeDay = new Date();
            // beforeDay.setDate(beforeDay.getDate()-1);
            // let strBeforeDay = JSON.stringify(beforeDay);
            // strBeforeDay =strBeforeDay.substr(1,10);
            // snapshot.numChildren()
            // this.dataRef = database.ref('tbl_Info/'+strBeforeDay);
            // this.dataRef.on('value', (snapshot) => {
            //     let infoData = snapshot.val(); 
            //     let dateNow = JSON.stringify(new Date());    
            //     let strDateNow = dateNow.substr(1,10);
            //     this.dataRef = database.ref('tbl_Info/'+strDateNow); 
            //     this.dataRef.set({"userToday":1,"totalUser":infoData.totalUser,"viewToday":1,"userYesterday":infoData.userToday});  
            // })
                // this.dataRef = database.ref('tbl_Info');
                // this.dataRef.on('value', (snapshot) => {
                //      let infoData = snapshot.val();  
                //      let count = snapshot.numChildren();
                //      this.setState({count:count})  
                // })
        //  }
        // if(this.state.count===0){
        //     let dateNow = JSON.stringify(new Date());    
        //     let strDateNow = dateNow.substr(1,10);
        //     this.dataRef = database.ref('tbl_Info/'+strDateNow); 
        //     this.dataRef.set({"userToday":1,"totalUser":1,"viewToday":1,"userYesterday":0});    
        // }else{
        //     this.dataRef = database.ref('tbl_Info');
        //     this.dataRef.on('value', (snapshot) => {
        //        let infoData = snapshot.val();  
            //    console.log('aaab: '+ typeof(Object.keys(infoData)));
            //    console.log('len: '+ Object.keys(infoData).length);
            //    let len = parseInt(Object.keys(infoData).length)-2;
            //    let strBeforeDay = Object.keys(infoData)[len];
            //    console.log('beforeDay: '+strBeforeDay);
            //     this.dataRef = database.ref('tbl_Info/'+strBeforeDay);
            //     this.dataRef.on('value', (snapshot) => {
            //         let infoData = snapshot.val(); 
            //         console.log('infoData:'+JSON.stringify(infoData));

                    // this.setState({
                    //     userToday:infoData.userToday+1,
                    //     totalUser:infoData.totalUser+1,
                    //     viewToday:infoData.viewToday+1,
                    //     userYesterday:infoData.userYesterday,
                    //     userOnline:true,
                    // }); 
            //     }) 
            // })

        //     let dateNow = JSON.stringify(new Date());    
        //     let strDateNow = dateNow.substr(1,10);
        //     this.dataRef = database.ref('tbl_Info/'+strDateNow); 
        //     this.dataRef.set({"userToday":1,"totalUser":1,"viewToday":1,"userYesterday":0});    
        // }
        // console.log('componentDidUpdate:'+this.state.userOnline);
        if(this.state.userOnline===true){
            this.writeUserInfo(this.state);
     //       console.log('componentDidUpdate userOnline===true: '+ this.state);
            this.setState({userOnline:false}); 
        }
   //     console.log('componentDidUpdate userOnline===false');
        
    }
    render() {
        if(this.state.userOnline===true){
            console.log('bắt buộc phải có dòng này để debug');
          //  this.writeUserInfo(this.state);
           // this.setState({userOnline:false});
        }
        return (
            <div>
                
            </div>
        );
    }
}

export default WriteInfoUser;
