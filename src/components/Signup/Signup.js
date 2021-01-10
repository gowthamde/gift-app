import React, { Component} from 'react';
import './Signup.css';
import axios from '../../axios';
const emailRegex = RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            mobileNo: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                name: '',
                email: '',
                mobileNo: '',
                password: '',
                confirmPassword: ''
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.formValid(this.state.formErrors)) {
            let user = {
                name: this.state.name,
                email: this.state.email,
                mobileNo: this.state.mobileNo,
                password: this.state.password
            }
            axios.post('users/signup',user).then(response => {
                if (response.data.user) {
                    localStorage.setItem('userType', 'appUser');
                    localStorage.setItem('token', response.data.token);
                    this.props.history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    formValid = (formErrors) => {
        let valid = true;
        Object.values(formErrors).forEach(val => {
            if (val.length> 0)
            valid = false
        })
        return valid;
    }
    
    handleChange = (event) => {
        event.preventDefault();
        let formErrors = this.state.formErrors;
        const { name, value } = event.target;
        switch(name) {
            case 'name': {
                formErrors.name = value.length < 5 ? 'minimum 3 characters required': ''
                break;
            }
            case 'email': {
                formErrors.email = emailRegex.test(value) ? '' : 'Invalid Email';
                break;
            }
            case 'mobileNo': {
                formErrors.mobileNo = value.length < 10 ? 'mobile No should be 10 digits': '';
                break;
            }
            case 'password': {
                formErrors.password = value.length < 6 ? 'minimum 6 characters requires': '';
                break;
            }
            case 'confirmPassword': {
                formErrors.confirmPassword = value.length < 6 ? 'minimum 6 characters requires': '';
                break;
            }
            default:
                break;
        }
        this.setState({
            [name]: value, formErrors
        });
    }

    render() {
        const { name, email, mobileNo, password, confirmPassword} = this.state;
        return (
            <div className="wrapper">
            <form onSubmit={this.submitForm} className="form-wrapper">
                <div className="center-text">
                    <p className="f22">Signup</p>
                </div>
                <div className="mb-1">
                    <label className="nameLabel">Name:</label>
                    <input type="text" required name="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="mb-1">
                    <label className="emailLabel">Email:</label>
                    <input type="email" required name="email" value={email} onChange={this.handleChange}/>
                </div>
                <div className="mb-1">
                    <label className="mobileNoLabel">Mobile No:</label>
                    <input type="number" required name="mobileNo" maxLength="10" value={mobileNo} onChange={this.handleChange}/>
                </div>
                <div className="mb-1">
                    <label className="passwordLabel">Password:</label>
                    <input type="password" required name="password" maxLength="10" value={password} onChange={this.handleChange}/>
                </div>
                <div className="mb-1">
                    <label className="confirmPasswordLabel">Confirm Password:</label>
                    <input type="password" required name="confirmPassword" maxLength="10" value={confirmPassword} onChange={this.handleChange}/>
                </div>
                <div className="mb-1 center-text">
                    <button type="submit" className="btn btn-primary">
                        Signup
                    </button>
                </div>
            </form>
            </div>
        )
    }
}

export default Signup;