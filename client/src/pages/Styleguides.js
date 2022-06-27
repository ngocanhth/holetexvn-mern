import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Box } from '@mui/system';
import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { PrimayButton, SecondaryButton } from '../styleguides/button';


// import Header from '../components/Header';
// import PostList from '../components/PostList';
// import { showModal } from '../redux/actions';
// import CreatePostModal from '../components/CreatePostModal';

export default function Styleguides() {
  const dispatch = useDispatch();

  // const openCreatePostModal = React.useCallback(() => {
  //   dispatch(showModal());
  // }, [dispatch]);

  return (
    <Container
      maxWidth='md'
      // sx={{ px: {sm: 6} }}
      sx={{ px: { sm: 7 } }}
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
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Typography component="p" paragraph={true} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      <Box>Box</Box>
      <Button>button</Button>
      <h4>test responsie h4</h4>
      <Typography variant='h2'>Font Roboto</Typography>
      <Typography color='blue'>Test Typography</Typography>
      <Typography >Lorem Ipsum is simply dummy te</Typography>
      <Link href="#">Link</Link>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Typography component="p" paragraph={true} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      <Box>Box</Box>
      <Button>button</Button>
      <h4>test responsie h4</h4>
      <Typography variant='h1'>Font Poppins</Typography>
      <Typography variant='h1'>Font Poppins</Typography>
      <Typography variant='h3'>Font Poppins</Typography>
      <Typography variant='h4'>Font Poppins</Typography>
      <Typography variant='h5'>Font Poppins</Typography>
      <Typography color='blue'>Test Typography</Typography>
      <Typography >Lorem Ipsum is simply dummy te</Typography>
      <Link className="link" href="#" underline="hover" target="_blank" rel="noopener">
        Link
      </Link>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>

      <Box sx={{ mt: 5 }}>
        <Button variant="primary" disableRipple>Button Default</Button>
        <Button variant="secondary">Button Default</Button>
        <Button variant="hollow" disableRipple>Button Default</Button>
        <Button variant="disabled" disabled={true}>Button Default</Button>
      </Box>
      {/* <Styleguides /> */}
      <h2>H2 khong dung Typography</h2>
      <h3>Grey h1 element</h3>
    </Container>

  );
}
