import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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

        // call to action
        this.props.createPost(post);
    }

    static propTypes = {
        createPost: PropTypes.func.isRequired
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
                        <label>Body: </label>
                        <br />
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

export default connect(null, { createPost })(PostForm);