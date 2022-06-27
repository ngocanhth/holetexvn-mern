import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log('Posts:', posts);

    // 1 action duoc dispatch se len middlware saga truoc khi dc gui toi reducers
    // khi co ket qua tra ve se goi 1 den tiep 1 effact khasc cua redux saga la put 
    // se trigger 1 action trong saga la (actions.getPosts.getPostsSuccess voi tham so la kq tra ve tu effect call lay dc dc request fetchPosts

    yield put(actions.getPosts.getPostsSuccess(posts.data));

    // khi trigger action thi actions.getPosts.getPostsSuccess trong posts reducer se dc goi 

    // {
    //     isLoading: false,
    //     data: action.payload,
    // };

    // store se update state vaf component co goi den state se rerender va show len UI

  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost,  action.payload);
    console.log('Post: ', post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    console.error(error);
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    const post = yield call(api.updatePost,  action.payload);
    console.log('Post Update: ', post);
    yield put(actions.updatePost.updatePostSuccess(post.data));
  } catch (error) {
    console.error(error);
    yield put(actions.createPost.updatePostFailure(error));
  }
}

// takeLatest : trong th co nhieu action cung dispatch thi no se chi trigger cai action cuoi va khi hoan thanh cac action khac se bi cancel
function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;