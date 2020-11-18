import { Provider } from 'react-redux';

import store from './store'; // Carrinho onde esta toda a função redeux

import CourseList from './components/CourseList';

function App() {
  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}

export default App;
