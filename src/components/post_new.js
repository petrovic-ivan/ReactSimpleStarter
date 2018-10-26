import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
    
    renderField(field) {
        const red = {
            color: 'red'
        };
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text" {...field.input} />
                <div style={red}>
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            debugger;
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const error = {};

    if (!values.title) {
        error.title = 'Enter title!';
    }

    if (!values.tags) {
        error.tags = 'Enter tags!';
    }

    if (!values.content) {
        error.content = 'Enter content!';
    }

    return error;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
);