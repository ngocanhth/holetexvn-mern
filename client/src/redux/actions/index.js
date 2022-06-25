import { createActions } from 'redux-actions';

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
//     payload: {
//         name: 'Test',
//         content: 'gdgdgs'
//     }
// }
