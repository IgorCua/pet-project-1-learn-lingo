// import logo from './logo.svg';
import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../apps/header/Header';
import { HomePage } from '../apps/homePage/HomePage';
import { TeachersPage } from '../apps/teachersPage/TeachersPage';
import { FavoritesPage } from '../apps/favoritesPage/FavoritesPage';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/teachers' element={<TeachersPage/>}/>
        { isLoggedIn && <Route path='/favorites' element={<FavoritesPage/>}/>}
        <Route path='*' element={<HomePage/>}></Route>
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
