import React from 'react'
import axios from 'axios'

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
                <label htmlFor="name">Name</label>
                <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}/>

                <label htmlFor="email">Email</label>
                <input
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}/>

                <label htmlFor="password">Password</label>
                <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>

                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={this.state.password_confirmation}
                onChange={this.handleChange}/>

                <input type="submit" value="Create Account" />
            </form>
        )
    }
}

export default UserForm;
