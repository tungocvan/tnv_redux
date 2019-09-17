// bài 126
//import {createStore} from "redux";
import axios from 'axios';
var redux = require('redux');

const INITIAL_STATE = {
    isUpdate:false,
    ProductJson:null,
    itemProduct:null,
    isProduct:false,
    sanpham:null,
    cate:null,
    productSearch:null,
    isProSearch:false,
    isWriteIp:false,
    footerOne:null,     
    isFooterOne:false,
    isHome:false,
    isShow:false,
    baiviet:'',
};
 
 const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_DATA':
        //    console.log("Ket Noi Thanh Cong AddData nhận dữ liệu vào để thêm mới: "+ action.getItem);

        // có thể thay đổi state trong đây            
        return {...INITIAL_STATE,name:'Van-Add',age:20,color:[...INITIAL_STATE.color,'hong','vang'] }
        case 'getData':
         //   console.log("Ket Noi Thanh Cong getData nhận dữ liệu vào để thêm mới: ");
            //action.ProductJson             
            state = {...INITIAL_STATE,ProductJson:action.ProductJson};
            return state
        case 'GET_JSON':
                axios.get('https://dienthoaisoctrang.com/getproductjson/')
                .then(res => {
                localStorage.setItem('ProductJson',JSON.stringify(res.data));
                state = {...INITIAL_STATE,ProductJson:res.data,isUpdate:true};
                });
               return state
        case 'UPDATE_JSON':
            //state = {...INITIAL_STATE,ProductJson:'aa',isUpdate:true};
            return state
        case 'IS_PRODUCT':
            //console.log("Ket Noi Thanh Cong IS_PRODUCT "+action.item);
            state = {...INITIAL_STATE,isProduct:true,itemProduct:action.item};
            return state
        case 'GET_ITEM':
           // console.log("Ket Noi Thanh Cong getItemProduct ");
            state = {...INITIAL_STATE,itemProduct:action.itemProduct,isProduct:true};
            return state
        case 'IS_UPDATE':
             state = {...INITIAL_STATE,isUpdate:true};
            return state
        case 'GET_SANPHAM':
           // console.log("Kết nối thành công đến GET SANPHAM: " + action.item); 
            state = {...INITIAL_STATE,sanpham:action.item}
            return state    
        case 'GET_CATE':
        //    console.log("Category: " + JSON.stringify(action.cate)); 
            state = {...INITIAL_STATE,cate:action.cate}
            return state    
        case 'PRODUCT_SEARCH':
           // console.log("Category: " + JSON.stringify(action.item)); 
            state = {...INITIAL_STATE,productSearch:action.item,isProSearch:true}
            return state    
        case 'FOOTER_ONE':
           // console.log("Category: " + JSON.stringify(action.item)); 
            state = {...INITIAL_STATE,footerOne:action.item,isFooterOne:true}
            return state    
        case 'IS_WRITE_IP':
          //  console.log("IS_WRITE_IP: " + INITIAL_STATE.isWriteIp); 
            state = {...INITIAL_STATE,isWriteIp:!INITIAL_STATE.isWriteIp}
            return state    
        case 'IS_HOME':
            state = {...INITIAL_STATE,isHome:true};
            return state
        case 'IS_SHOW':
           // console.log('IS_SHOW');
            state = {...INITIAL_STATE,isShow:true};
            return state
        case 'BAI_VIET':
            console.log('BAI_VIET: '+ action.item);
            state = {...INITIAL_STATE,baiviet:action.item};
            return state
        default:
            return state
    }
}

let store = redux.createStore(reducer);
export default store;
