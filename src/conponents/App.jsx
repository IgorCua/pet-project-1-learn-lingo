import logo from './logo.svg';
import './App.scss';
import { Route, Router } from 'react-router-dom';
import { Header } from './header/Header';

function App() {
  return (
    <Router>
      <Route path='/' element={<Header/>}>
        
      </Route>
      <Route path='/teachers' element></Route>
      <Route path='/favorites' element></Route>
      <Route path='*' element></Route>
    </Router>
  );
}

export default App;
