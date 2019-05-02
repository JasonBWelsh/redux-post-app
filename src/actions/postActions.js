import { FETCH_POSTS, NEW_POST } from "./types";

// export const fetchPosts = () => dispatch => {
//   console.log("DRD __ fetching...");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

// test Saga for FETCH_POSTS
export const fetchPosts = () => dispatch => {
    dispatch({
        type: FETCH_POSTS,
        payload: ['DRD TEST FETCH_POSTS'], // empty as initial value
    });
}

// export const createPost = postData => dispatch => {
//   console.log("DRD __ `createPost`");
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(response => response.json())
//     .then(post =>
//       dispatch({
//         type: NEW_POST,
//         payload: post
//       })
//     );
// };

//test saga for NEW_POST
export const createPost = () => dispatch => {
    dispatch({
        type: NEW_POST,
        payload: ['DRD TEST NEW_POST'], // test initial value
    });
}