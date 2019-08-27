// bài 126
//import {createStore} from "redux";
var redux = require('redux');

const INITIAL_STATE = {
    name: 'Luat',
    age: 18,
    color:['trang','xanh','do'],
    sothich:['3','4','5']
};
 
 const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            console.log("Ket Noi Thanh Cong AddData nhận dữ liệu vào để thêm mới: "+ action.getItem);

        // có thể thay đổi state trong đây            
        return {...INITIAL_STATE,name:'Van-Add',age:20,color:[...INITIAL_STATE.color,'hong','vang'] }
        case 'getData':
            console.log("Ket Noi Thanh Cong getData nhận dữ liệu vào để thêm mới: "+ action.getItem); 
            state = {...INITIAL_STATE,name:'Minh Get Data',age:30,color:[...INITIAL_STATE.color,'tim','do']};
            state.sothich =[...state.sothich,'6','7']
            return state
        default:
            return state
    }
}

let store = redux.createStore(reducer);
export default store;
