import React from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { InputGroup } from './form'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault(); // override standard form submission event

        // retrieve and save jwt token from server
        axios.post("/api/user_token", {
            auth: this.state,
        })
        .then(res => {
            sessionStorage.setItem('jwt', res.data.jwt)
            console.log(sessionStorage.getItem('jwt'))
        })
        .then(res => this.props.history.push('/'))
        .catch(res => console.log(res));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup id="email" type="email" value={this.state.email} onChange={this.handleChange}>
                    Email:
                </InputGroup>

                <InputGroup id="password" type="password" value={this.state.password} onChange={this.handleChange}>
                    Password:
                </InputGroup>

                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginForm;
