import React, { Component } from 'react';
import axios from 'axios';
import { database } from '../Components/FireBase';

export class FileUploadForm extends Component {
    
    componentWillMount() {
        
        
    }
    
    //UPLOAD_ENDPOINT = 'https://azshopweb.com/khachhang/upload/upload.php';
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
    }
    async onBlur(){
        // e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        if(this.props.getUrlImg){
            this.props.getUrlImg(res.data);
        }
      //  this.props.getUrlImg(res.data);
        console.log(res.data);
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    async uploadFile(file){
        

        const formData = new FormData();
        
        formData.append('avatar',file)
        
        return  await axios.post(this.props.url, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
      }
      componentDidUpdate(){
          if(this.props.stk){
             let len = this.props.stk.length;
             console.log('componentDidUpdate file: ' + this.props.stk);
             if(len > 10){
                this.dataRef = database.ref('tbl_tknh/'+this.props.name);
                this.dataRef.set({"name":this.props.stk})   ;
             }
          }
          if(this.state.file){
            this.onBlur();
          }
      }
    render() {
        
       // if(this.props.stk) {
          //  console.log('stk file upload: '+this.props.stk);
        return (
            // <form onSubmit={ this.onSubmit }>
            // <input type="file" onChange={ this.onChange } />
            // <button type="submit" >{this.props.tk}</button>
           // </form>
            <form>
            <input type="file" onChange={ this.onChange } />
            {/* <button type="submit" >{this.props.tk}</button> */}
            </form>
        );
        //}
    }
}

export default FileUploadForm;
