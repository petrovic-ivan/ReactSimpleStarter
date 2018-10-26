import React, { Component } from 'react';
import { fetchPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log('props: ',this.props);
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const post = this.props.post;
        if (!post) {
            return (<div>Please wait...</div>);
        }
        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <div>{post.content}</div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);