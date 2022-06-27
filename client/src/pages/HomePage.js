import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';

function HomePage() {
    const dispatch = useDispatch();

    const openCreatePostModal = useCallback(() => {
      dispatch(showModal());
    }, [dispatch]);

    return (
        <>
            <PostList></PostList>
            <CreatePostModal />
            <Fab
                color='primary'
                 onClick={openCreatePostModal}
                sx = {{
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                }}
            >
                <AddIcon />
            </Fab>
        </>
    );
}

export default HomePage;