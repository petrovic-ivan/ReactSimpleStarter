import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { fetchPosts } from '../actions';

export class PostIndex extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }    

    render() {
        const transitionOptions = {
            transitionName: 'fade',
            transitionEnterTimeout: 2000,
            transitionLeaveTimeout: 2000
        };
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                <CSSTransitionGroup  {...transitionOptions}>
                    {this.renderPosts()}
                </ CSSTransitionGroup >
                </ul>
            </div>
        )
    }

    renderPosts() {
        const array = Object.values(this.props.posts);

        return array.map(post => {
            return (
                <li className="list-group-item" key={post.id}>
                    
                    <Link to={`/posts/${post.id}`}>
                        {post.title}                    
                    </Link>
                </li>
            );
        })
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);