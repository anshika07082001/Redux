import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Todo from './Components/Todo';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todo/>
    </div>
    </Provider>
  );
}

export default App;
