import { FETCH_POSTS, NEW_POST } from "./types";

// dispatched action intercepted by Saga in `saga.js`
export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: ['DRD TEST FETCH_POSTS'], // empty as initial value
    });
}

export const createPost = postData => dispatch => {
  console.log("DRD __ `createPost`");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
