import React, { Component } from 'react';

class PostForm extends Component {

    state = {
        title: '',
        body: ''
    }

    handleChange = e => {
        console.log('DRD __ `handleChange');
        this.setState({[ e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        console.log('DRD __ `handleSubmit`');
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea 
                            name="body" 
                            value={this.state.body}
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;