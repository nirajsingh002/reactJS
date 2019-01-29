import React, { Component } from 'react'
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';
import { isPasswordMatch } from './CustomValidation';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                age: '',
                regexp: '',

            }
        }
    }
    handleSubmit() {
        console.log(this.state.form)
    }
    handleChange(e, fieldName) {
        let fieldValue = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [fieldName]: fieldValue
            }
        }, function () {
            // console.log(this.state.form.email)
        })
    }

    render() {
        return (
            <div className="ml-20">
                <ValidatorForm
                    ref="form"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <label>Email</label>
                    <TextValidator
                        onChange={(e) => this.handleChange(e, "email")}
                        name="email"
                        value={this.state.form.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['This field is required', 'email is not valid']}
                    />
                    <label>Age</label>
                    <TextValidator
                        onChange={(e) => this.handleChange(e, "age")}
                        name="age"
                        value={this.state.form.age}
                        validators={['required', 'maxNumber:100', 'isNumber']}
                        errorMessages={['This field is required', 'The number is not more than 100', 'Enter number only']}
                    />
                    <label>Regexp for ^[0-9]{'{'}10 {'}'}$</label>
                    <TextValidator
                        onChange={(e) => this.handleChange(e, "regexp")}
                        name="regexp"
                        value={this.state.form.regexp}
                        validators={['matchRegexp:^[0-9]{10}$']}
                        errorMessages={['Number should be 10 digit']}
                    />
                    <label>Password</label>
                    <TextValidator
                        onChange={(e) => this.handleChange(e, 'password')}
                        name="password"
                        value={this.state.form.password}
                        validators={['required', 'minLength:6']}
                        errorMessages={['This field is required', 'Password must be at least 6 character']}
                    />
                    <label>Confirm Password</label>
                    <TextValidator
                        onChange={(e) => this.handleChange(e, 'password2')}
                        name="password2"
                        value={this.state.form.password2}
                        validators={['required', 'minLength:6', `isPasswordMatch:${this.state.form.password}`]}
                        errorMessages={['This field is required', 'Password must be at least 6 character', 'Those password didn\'t  match. Try again.']}
                    />
                    <button type="submit">submit</button>
                </ValidatorForm>
            </div>
        )
    }
}

export default App;
