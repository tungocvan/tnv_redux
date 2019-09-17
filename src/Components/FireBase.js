import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDsnpy9t3r1mZB0LpkKCyG2IU8aWEmuSzA",
  authDomain: "tungocvan-2eea2.firebaseapp.com",
  databaseURL: "https://tungocvan-2eea2.firebaseio.com",
  projectId: "tungocvan-2eea2",
  storageBucket: "tungocvan-2eea2.appspot.com",
  messagingSenderId: "810469432272",
  appId: "1:810469432272:web:bf03c01d69d2ed0f"
};
 //firebase.initializeapp()
 firebase.initializeApp(firebaseConfig);
 export default firebase;
 export const database = firebase.database();
 //export const tblUser = firebase.database().ref("tbl_user/");
 //export const tblPrduct = firebase.database().ref("tbl_Prduct/");
 //console.log(data);
 
 // data.once('value').then(function(snapshot){
 //     console.log(snapshot.val());
 // });
 // hàm sửa dữ liệu 
 // Hàm sửa dữ liệu
//   data.set({
//     id:1,
//     name:"Nguyễn Văn An",
//     birthday: "10/01/2007"
//   });

 // hàm tạo mới dữ liệu
//   data.push({
//     name:"Nguyễn Văn B",
//     email: "vansala78@gmail.com"
//    });  

// import { database } from './FireBase';
// componentDidMount() {
//   this.getFireBaseToState('tbl_Product/');
// }
// getFireBaseToState(tbl){
//   // gọi hàm này trong: componentDidMount
//   this.dataRef = database.ref(tbl);
//   this.dataRef.on('value', (snapshot) => {
//   this.setState({
//       data: snapshot.val()
//   });
//   localStorage.setItem('data',JSON.stringify(snapshot.val())); 
//   });
// }
// if(this.state.data===null){
//   console.log('Đang kết nối csdl...');
  
// }
// else{
//console.log(JSON.stringify(this.state.data));
//}