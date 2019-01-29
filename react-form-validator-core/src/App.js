import React, { Component } from 'react'
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';

class App extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: '',
                number: ''
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
            <ValidatorForm
                ref="form"
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <TextValidator
                    onChange={(e) => this.handleChange(e, "email")}
                    name="email"
                    value={this.state.form.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'email is not valid']}
                />
                <TextValidator
                    onChange={(e) => this.handleChange(e, "number")}
                    name="number"
                    value={this.state.form.number}
                    validators={['required', 'maxNumber: 100', 'isNumber']}
                    errorMessages={['This field is required', 'The number is not more than 100', 'Enter number only']}
                />
                <button type="submit">submit</button>
            </ValidatorForm>
        )
    }
}

export default App;
