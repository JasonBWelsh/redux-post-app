import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export const FETCH_POSTS_ASYNC = "FETCH_POSTS_ASYNC";

// watcher saga for FETCH_POSTS
export function* watchFetchPosts() {
  console.log("DRD-1 __ `watchFetchPosts` in `saga.js`");
  yield takeLatest("FETCH_POSTS", fetchPostsWorker); // calls worker saga
}

const fetchPosts = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (error) {
    console.log(error);
  }
};

// worker saga for FETCH_POSTS makes api call when watcher sees the action
function* fetchPostsWorker() {
  console.log("DRD-3 __ `fetchPostsWorker` in `saga.js`");
  try {
    const response = yield call(fetchPosts);
    const posts = response.data;

    console.log(
      "DRD-3-A __ inside worker saga logging `posts` var:::",
      posts
    );

    // dispatch (put) a success action to the store with posts
    yield put({
      type: FETCH_POSTS_ASYNC,
      payload: posts,
    });
  } catch (error) {
    // Need to dispatch a failure action to store
    console.log(error);
  }
}