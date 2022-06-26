import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import * as actions from './redux/actions';
// import { Container, Box } from '@mui/system';
import { Container, Box } from '@mui/material';
import './styleguides/styleguides.css';
import Header from './components/Header';
import GlobalCssOverride from './styleguides/globalStyles';


function App() {
  const dispatch = useDispatch();

  console.log(actions.getPosts.getPostsRequest());

  dispatch(actions.getPosts.getPostsRequest());

  return (
    <Container className="container" maxWidth='lg1280' sx={{ px: 6 }} >
      <GlobalCssOverride />
      <Header />
      <HomePage />
      <h2>H2 khong dung Typography</h2>
      <h3>Grey h1 element</h3>
    </ Container>

  );
}

export default App;
