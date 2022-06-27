import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

//return reduxAction

export const getPosts = createActions({
    getPostsRequest: undefined, // -> reduxAaction
    getPostsSuccess: (payload) => payload, // -> reduxAaction
    getPostsFailure: (err) => err, // -> reduxAaction
});


// getType(reduxAction().type) = getType(getPosts.getPostsSucces) => tra ve ten cua action

// {
//     type: getPostsRequest
// },



// {
//     type: getPostsSucces,
//     isLoading: false,
//     payload: {
//         name: 'Test',
//         content: 'gdgdgs'
//     }
// }

    export const createPost = createActions({
        createPostRequest: (payload) => payload,
        createPostSuccess: (payload) => payload,
        createPostFailure: (err) => err,
    });
  
  export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
  });

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
