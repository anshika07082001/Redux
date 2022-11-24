import { Route, Routes } from 'react-router-dom';
import './App.css';
import GitSearch from './features/GitSearch';
import Profile from './features/Profile';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<GitSearch/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
