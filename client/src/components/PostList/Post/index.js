import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';

import React, { useCallback } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useDispatch } from 'react-redux';

function Post({post}) {
    const dispatch = useDispatch();

    // const onLikeBtnClick = useCallback(() => {
    //     dispatch(
    //       updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    //     );
    //   }, [dispatch, post]);
    
    return (
        <Card>
            <CardHeader
            avatar={<Avatar>A</Avatar>}
            title={post.author}
            subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
            action={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            />
            <CardMedia
            image={post.attachment || ''}
            title='Title'
            />
            <CardContent>
            <Typography variant='h5' color='textPrimary'>
                {post.title}
            </Typography>
            <Typography variant='body2' component='p' color='textSecondary'>
                {post.content}
            </Typography>
            </CardContent>
            <CardActions>
            <IconButton onClick={{}}>
                <FavoriteIcon />
                <Typography component='span' color='textSecondary'>
                {`${post.likeCount} likes`}
                </Typography>
            </IconButton>
            </CardActions>
      </Card>
    );
}

export default Post;