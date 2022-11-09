import './App.css';
import ContactForm from './ContactForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ContactForm/>
    </div>
    </Provider>
  );
}

export default App;
