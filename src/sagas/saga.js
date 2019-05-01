import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import Posts from "../components/Posts";

// function to make api request for posts and returns promise
function fetchPosts() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  });
}

// watcher saga for FETCH_POSTS
export function* watchFetchPosts() {
  yield takeEvery("FETCH_POSTS", fetchPostsAsync); // calls worker saga
}

// worker saga for FETCH_POSTS makes api call when watcher sees the action
function* fetchPostsWorker() {
  try {
    const response = yield call(fetchPosts);

    // dispatch (put) a success action to the store with posts
    yield put({
      type: FETCH_POSTS_ASYNC,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
}
