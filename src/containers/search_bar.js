import React, { Component } from 'react';

const url = 'https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        console.log(this.state.term);
    }

    onFormSubmit(event) {
        event.preventDefault();


    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get fiveday forecst for city."
                className="form-control"
                value={this.state.term} 
                onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}