import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { CategoryMovies } from './pages/CategoryMovies';
import { routhPath } from './constants/route';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path={routhPath.home} element={<Home/>}/>
      <Route path={routhPath.categories} element={<CategoryMovies/>}/>
      <Route path={routhPath.invalid} element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
