// import logo from './logo.svg';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
import { Home } from './home/Home';
import { Teachers } from './teachers/Teachers';
import { FavoritesPage } from './favorites/FavoritesPage';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        { isLoggedIn && <Route path='/favorites' element={<FavoritesPage/>}/>}
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
