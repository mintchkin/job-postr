import React from 'react'

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
        alert("Form submitted:\n" + JSON.stringify(this.state));
        event.preventDefault();
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
