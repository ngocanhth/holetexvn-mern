import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Box } from '@mui/system';
import { Button } from '@mui/material';

// import Header from '../components/Header';
// import PostList from '../components/PostList';
// import { showModal } from '../redux/actions';
// import CreatePostModal from '../components/CreatePostModal';

export default function HomePage() {
  const dispatch = useDispatch();

  // const openCreatePostModal = React.useCallback(() => {
  //   dispatch(showModal());
  // }, [dispatch]);

  return (
    <Container
      maxWidth='md'
      sx={{ px: 3 }}
      disableGutters={true}

    >

      {/* <Header /> */}
      {/* <PostList />
      <CreatePostModal /> */}
      {/* <Fab
        color='primary'
      >
        <AddIcon />
      </Fab> */}
      <Box>gdgdg</Box>
      <Button>ghdhdhd</Button>
    </Container>

  );
}
