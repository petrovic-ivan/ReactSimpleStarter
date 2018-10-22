import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

export class PostIndex extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }    

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

    renderPosts() {
        const array = Object.values(this.props.posts);

        return array.map(post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title + ', ' + post.categories}
                </li>
            );
        })
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);