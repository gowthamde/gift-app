import React, { Component} from 'react';
import axios from '../../axios';

const emailRegex = RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.formValid(this.state.formErrors)) {
            let user = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post('users/signin',user).then(response => {
                console.log(response)
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

    handleChange = event => {
        event.preventDefault();
        let formErrors = this.state.formErrors;
        const { name, value } = event.target;
        switch(name) {
            case 'email': {
                formErrors.email = emailRegex.test(value) ? '' : 'Invalid Email';
                break;
            }
            case 'password': {
                formErrors.password = value.length < 6 ? 'minimum 6 characters requires': '';
                break;
            }
            default:
                break;
        }
        this.setState({
            [name]: value, formErrors
        })
    }
    render () {
        const { email, password} = this.state;
        return (
            <div className="wrapper">
                <form onSubmit={this.submitForm} className="form-wrapper">
                <div className="center-text">
                    <p className="f22">Signin</p>
                </div>
                <div className="mb-1">
                    <label className="emailLabel">Email:</label>
                    <input type="email" required name="email" value={email} onChange={this.handleChange}/>
                </div>
                <div className="mb-1">
                    <label className="passwordLabel">Password:</label>
                    <input type="password" required name="password" maxLength="10" value={password} onChange={this.handleChange}/>
                </div>
                <div className="mb-1 center-text">
                    <button type="submit" className="btn btn-primary">
                        Signin
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default Signin;