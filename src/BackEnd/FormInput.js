import React, { Component } from 'react';
const validateInput = (type, checkingText) => {
    if (type === "phonenumber") {
        /* Kiểm tra phonenumber */
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult !== null) {
            return { isInputValid: true,
                    errorMessage: ''};
        } else {
            return { isInputValid: false,
                    errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'};
        }
    }

    if (type === "fullname") {
        /* Kiểm tra fullname */
    }
}
export class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            phonenumber: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            },
            fullname: {
                value : '',
                isInputValid: true, 
                errorMessage: ''
            },
        }
    }
    handleInput = event => {
        const { name, value } = event.target;
        const newState = {...this.state[name]}; /* dummy object */
        newState.value = value;
        this.setState({[name]: newState});
    }
    
    handleInputValidation = event => {
        const { name } = event.target;
        const { isInputValid, errorMessage } = validateInput(name, this.state[name].value);
        const newState = {...this.state[name]}; /* dummy object */
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({[name]: newState})
    }
    FormError(isHidden,errorMessage) {
        /* nếu isHidden = true, return null ngay từ đầu */
        if (isHidden) { return null;}
    
        return ( <div>{errorMessage}</div>)
    }
    
    render() {
        
        return (
            <div>
                <input
                    name={this.props.name}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation} 
                />
                {this.FormError(this.state.isInputValid,this.state.errorMessage)}
                
            </div>
        );
    }
}

export default FormInput;
