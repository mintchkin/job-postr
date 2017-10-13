import React from 'react'
import axios from 'axios'
import { InputGroup } from './form'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        axios.post("/users.json", {
            user: this.state,
        }, {
            headers: {'Content-Type': 'application/json'},
        })
        .then(resp => console.log(resp))
        .catch(resp => console.log(resp));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup id="name" type="text" value={this.state.name} onChange={this.handleChange}>
                    Name:
                </InputGroup>

                <InputGroup id="email" type="email" value={this.state.email} onChange={this.handleChange}>
                    Email:
                </InputGroup>

                <InputGroup id="password" type="password" value={this.state.password} onChange={this.handleChange}>
                    Password:
                </InputGroup>

                <InputGroup id="password_confirmation" type="password"
                            value={this.state.password_confirmation} onChange={this.handleChange}>
                    Confirm Password:
                </InputGroup>

                <input type="submit" value="Create Account" />
            </form>
        )
    }
}

export default UserForm;
