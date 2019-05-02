import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import styled from 'styled-components';

export const FormInput = styled.input`
    background: transparent;
    outline: none;
    width: 300px;
    border: 1px solid palevioletred;
    margin-top: 1em;
    padding: .5em;
    color: #fff;
    transition: all .3s ease-out;

    &:focus: {
        width: 33%;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: palevioletred;
    border: 2px solid palevioletred;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;

const FormTextArea = styled(FormInput)`
    height: 150px;
`;

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    console.log("DRD __ `handleChange");
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log("DRD __ `handleSubmit`");
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // call to action
    this.props.createPost(post);
    this.setState({
      title: "",
      body: ""
    });
  };

  static propTypes = {
    createPost: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <FormInput
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <FormTextArea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);
