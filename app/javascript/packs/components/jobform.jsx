import React from 'react'
import axios from 'axios'

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        axios.post("/api/jobs.json", {
            job: this.state,
        })
        .then(res => console.log(res))
        .catch(res => console.log(res));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}/>

                <label htmlFor="description">Description</label>
                <textarea
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}/>

                <input type="submit"/>
            </form>
        )
    }
}

export default JobForm;
