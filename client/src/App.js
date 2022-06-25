import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import * as actions from './redux/actions';
// import { Container, Box } from '@mui/system';
import { Container, Box } from '@mui/material';


function App() {
  const dispatch = useDispatch();

  console.log(actions.getPosts.getPostsRequest());

  dispatch(actions.getPosts.getPostsRequest());

  return (
    <Container maxWidth='lg1280' disableGutters={true} sx={{ px: 6 }} >
      <HomePage />
    </ Container>
  );
}

export default App;
