import logo from './logo.svg';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        
      </Route>
      <Route path='/teachers' element={<Header/>}>

      </Route>
      <Route path='/favorites' element={<Header/>}>
        
      </Route>
      <Route path='*' element></Route>
    </Routes>
  );
}

export default App;
