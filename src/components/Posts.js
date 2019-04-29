import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('DRD __ `componentDidMount` inside `Posts`');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>DRD</h1>
                {postItems}
            </div>
        );
    }
}

export default Posts;