import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';



function PostList(props) {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    console.log('Posts List: ', posts);

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    },[dispatch]);

    return (
        <Grid container spacing={2} alignItems='stretch'>
            {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={4}>
                <Post post={post} />
            </Grid>
            ))} 
      </Grid>
    );
}

export default PostList;