import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

export class PostIndex extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
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
    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);