import React from 'react'
import axios from 'axios'
import { InputGroup, TextareaGroup } from './form'

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault(); // override standard form submission event

        const headers = {'Authorization': `Bearer ${sessionStorage.jwt}`};

        axios.post("/api/jobs", {
            job: this.state,
        }, {headers})
        .then(res => console.log(res))
        .catch(error => {
            if (error.response.status === 401) {
                sessionStorage.removeItem('jwt');
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup id="title" type="text" value={this.state.title} onChange={this.handleChange}>
                    Title:
                </InputGroup>

                <TextareaGroup id="description" value={this.state.description} onChange={this.handleChange}>
                    Description:
                </TextareaGroup>

                <input type="submit"/>
            </form>
        )
    }
}

export default JobForm;