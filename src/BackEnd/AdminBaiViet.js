import React, { Component } from 'react';
import FckEditor from './FckEditor';
import FileUploadForm  from "./FileUploadForm";

export class AdminBaiViet extends Component {
    constructor(props) {
        super(props);
        this.state={
            fck1:'',
            value:'',
        }
    }

    handleInput = event => {
        // const { value } = event.target;
        // this.setState({value});
     }

    handleInputValidation = event => {
        const { value } = event.target;
        this.setState({value});
    } 

    componentDidMount(){
        console.log('componentDidMount');
        
    }
    componentDidUpdate(){
        console.log('componentDidUpdate bai viet');
        
    }
    getContent(content){
        console.log('Content Bai Viet: '+content);
        this.setState({fck1:content})
    }
    componentDidUpdate(){
        if(this.state.fck1!==''){
         //   console.log('getContent: '+this.state.fck1);
        }
        if(this.state.value!==''){
           // console.log('value: '+ this.state.value);
        }
        
    }
    getData(){
        if(this.state.fck1!=='' && this.state.value!==''){
            console.log('value: '+ this.state.value);
            console.log('getContent: '+this.state.fck1);
        }
    }
    getUrlImg(url){
        console.log('url image: '+ JSON.stringify(url.url));
        
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="phonenumber" 
                    className="input-field"
                    placeholder="Số điện thoại"
                    // onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                    required />
                <FckEditor getContent={(content)=>this.getContent(content)}/>
                <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=test'} tk={"Cập nhật Banner"} getUrlImg={(url)=>this.getUrlImg(url)} />
                {/* <FileUploadForm url={'https://azshopweb.com/khachhang/upload/upload.php?id=test'} tk={"Cập nhật Banner"} /> */}
                <button onClick={()=>this.getData()}>Cập nhật</button>
            </div>
        );
    }
}

export default AdminBaiViet;
