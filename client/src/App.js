import { useDispatch } from 'react-redux';
import Styleguides from './pages/Styleguides';
import * as actions from './redux/actions';
// import { Container, Box } from '@mui/system';
import { Container, Box } from '@mui/material';
import './styleguides/styleguides.css';
import Header from './components/Header';
import GlobalCssOverride from './styleguides/globalStyles';
import HomePage from './pages/HomePage';


function App() {
  const dispatch = useDispatch();

  console.log(actions.getPosts.getPostsRequest());

  dispatch(actions.getPosts.getPostsRequest());

  return (
    <Container className="container" maxWidth='lg1280' disableGutters = {true} >
      <GlobalCssOverride />
      <Header />
      <HomePage></HomePage>
    </ Container>

  );
}

export default App;
