import React from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { getUserId, isLoggedIn } from '../util/auth'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const headers = {'Authorization': `Bearer ${isLoggedIn()}`};
        axios.get(`/api/users/${getUserId()}`, {
            headers,
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

    render() {
        return <h1>PROFILE</h1>
    }
}

export default UserProfile;
