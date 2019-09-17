import React, { Component } from 'react';
import FileUploadForm  from "./FileUploadForm";
export class AdminTknh extends Component {
    constructor(props) {
        super(props);
        this.state ={
 
        }
      }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        console.log(ten);
        console.log(giatri);
        this.setState({
          [ten]:giatri
        });
    }
    _checkLogin(event){
        event.preventDefault();
        console.log(this.state.file);
    }
    render() {
        return (
            <div>
            <input onBlur={(event)=>this.isChange(event)} name="tk1" className="form-control w-50" placeholder="Số tài khoản LienViet Bank"/>        
            <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=1'} tk={'Cập nhật lvb'} name="tk1" stk={this.state.tk1}/>
            <input onChange={(event)=>this.isChange(event)} name="tk2" className="form-control w-50" placeholder="Số tài khoản Techcombank"/>
            <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=2'} tk={'Cập nhật tcb'} name="tk2" stk={this.state.tk2}  />
            <input onChange={(event)=>this.isChange(event)} name="tk3" className="form-control w-50" placeholder="Số tài khoản Vietcombank"/>
            <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=3'} tk={'Cập nhật vcb'} name="tk3" stk={this.state.tk3}  />
            <input onChange={(event)=>this.isChange(event)} name="tk4" className="form-control w-50" placeholder="Số tài khoản Agribank"/>
            <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=4'} tk={'Cập nhật agi'} name="tk4" stk={this.state.tk4} />
      
            </div>
        );
    }
}

export default AdminTknh;
