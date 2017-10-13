import React from 'react'

// metaprogrammy black magic x_x
// takes an onSubmit function and a list of form fields/input types
// and dynamically creates a new form component
export const FormFactory = (onSubmit, fields) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {...fields};
            Object.keys(this.state).forEach(k => this.state[k] = '');

            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }

        render() {
            return (
                <form onSubmit={onSubmit}>
                    {
                        Object.entries(fields).map(field => {
                            if (field[1] == "textarea") {
                                var Group = TextareaGroup;
                            } else {
                                var Group = InputGroup;
                            }
                            return <Component key={field[0]} id={field[0]} value={this.state[field[0]]} onChange={this.handleChange} />
                        })
                    }
                </form>
            )
        }
    };
}

export const InputGroup = props => (
    <label htmlFor={props.id}>
        {props.children}
        <input
        id={props.id}
        name={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange} />
    </label>
)

export const TextareaGroup = props => (
    <label htmlFor={props.id}>
        {props.children}
        <textarea
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange} />
    </label>
)