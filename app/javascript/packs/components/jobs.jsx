import React from 'react'
import axios from 'axios'

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        // const headers = {'Authorization': `Bearer ${sessionStorage.jwt}`};
        axios.get('/api/jobs', {
            // headers,
        })
        .then(res => {
            this.setState({jobs: res.data});
            console.log(this.state.jobs);
        });
    }

    render() {
        const jobsList = this.state.jobs.map(job =>
            <li key={job.id}>
                <div>{job.title}</div>
                <div>{job.description}</div>
            </li>
        )

        return (
            <ul>
                {jobsList}
            </ul>
        )
    }
}

export default Jobs;
