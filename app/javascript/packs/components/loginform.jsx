import React from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

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
        .catch(res => console.log(res));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange} />

                <label htmlFor="password">Password</label>
                <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange} />

                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginForm;
