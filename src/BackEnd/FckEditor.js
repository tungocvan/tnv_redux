import React, { Component } from 'react';
import {connect} from 'react-redux';
import CKEditor from "react-ckeditor-component";


export class FckEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        
        }
        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this ); 
        this.onEditorBlur = this.onEditorBlur.bind( this ); 
    }
   onEditorChange( evt ) {
      this.setState( {
        content: evt.editor.getData()
      } );
      //console.log('content3: '+this.state.content);
      
  }

  handleChange( changeEvent ) {
      this.setState( {
        content: changeEvent.target.value
      } );
  }
     
  onEditorBlur(evt){
      //console.log("onBlur event called with event info: ", evt);
      this.setState( {
        content: evt.editor.getData()
      } );
      //console.log('onEditorBlur: '+this.state.content);
   //  this.props.getBaiViet(this.state.content);
        this.props.getContent(this.state.content);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }
    componentDidUpdate(){
      console.log('componentDidUpdate fck');
      
    }
    componentDidMount(){
      console.log('componentDidMount fck');
      
    }
    render() {
        console.log('State Content: '+ this.state.content);
        return (
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              // onChange={this.onEditorChange} 
              events={{
                 "blur": this.onEditorBlur,
                // "afterPaste": this.afterPaste,
                // "change": this.onEditorChange
              }}
             />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}
// this.props.testStore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBaiViet: (item) => {
      dispatch({type:"BAI_VIET",item})
    }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FckEditor);

