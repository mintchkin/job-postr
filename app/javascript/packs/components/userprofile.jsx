import React from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { getUserId, isLoggedIn } from '../util/auth'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            user: {},
        }
    }

    componentDidMount() {
        const headers = {'Authorization': `Bearer ${isLoggedIn()}`};
        axios.get(`/api/users/${getUserId()}`, {
            headers,
        })
        .then(res => {
            this.setState(res.data)
        })
        .catch(error => console.log(error));
    }

    render() {
        const user = this.state.user;

        const jobsList = this.state.jobs.map(job => 
            <li key={job.id}>
                <div>{job.title}</div>
                <div>{job.description}</div>
            </li>
        );

        return (
            <div>
                <h1>{user.name}</h1>
                <div>{user.email}</div>
                <ul>{jobsList}</ul>
            </div>
        )
    }
}

export default UserProfile;
