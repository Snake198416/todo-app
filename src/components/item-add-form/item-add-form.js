import React, {Component} from "react";
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({label: ''})
    }

    render() {
        return (
            <form className='item-add-form d-inline' onSubmit={this.onSubmit}>
                <input type="text" className='form-control'
                       onChange={this.onLabelChange} value={this.state.label}
                       placeholder='What needs to be done'/>
                    <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}









































