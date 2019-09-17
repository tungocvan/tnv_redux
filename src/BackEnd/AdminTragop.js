import React, { Component } from 'react';
import FileUploadForm  from "./FileUploadForm";
export class AdminTragop extends Component {
    constructor(props) {
        super(props);
        this.state={
            isUpdate:'',
        }
    }
    
    getUrlImg(url){
        console.log('url image: '+ JSON.stringify(url.url));
        this.setState({isUpdate:"Cập nhật thành công"});
       // alert("Cập nhật thành công");
    }

    render() {
        return (
            <div>
                <h2>Cập nhật Banner trả góp</h2>
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=tragop'} tk={"Cập nhật Banner trả góp"} getUrlImg={(url)=>this.getUrlImg(url)} />
                <h2>{this.state.isUpdate}</h2>
            </div>
            
        );
       
    }
}

export default AdminTragop;
