import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    static propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired,
        newPost: PropTypes.object
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Recent Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
}); 

export default connect(mapStateToProps, { fetchPosts })(Posts);