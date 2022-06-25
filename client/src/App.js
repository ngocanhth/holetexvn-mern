import { useDispatch } from 'react-redux';
import * as actions from './redux/actions';
function App() {
  const dispatch = useDispatch();

  console.log(actions.getPosts.getPostsRequest());

  dispatch(actions.getPosts.getPostsRequest());
  return (
    <div>
      hdhdhds
    </div>
  );
}

export default App;
