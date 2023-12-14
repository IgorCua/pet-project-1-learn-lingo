// import logo from './logo.svg';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
import { Home } from './home/Home';
import { Teachers } from './teachers/Teachers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/favorites'/>
        <Route path='*' element={<Home/>}></Route>
      </Route>

      {/* <Route path='/teachers' element={<Header/>}>

      </Route>
      <Route path='/favorites' element={<Header/>}>
        
      </Route> */}
      {/* <Route path='*' element={<Home/>}></Route> */}
    </Routes>
  );
}

export default App;
