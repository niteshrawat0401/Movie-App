import logo from './logo.svg';
import './App.css';
// import {Routes, Route} from 'react-router-dom'
// import { Home } from './pages/Home';
// import { CategoryMovies } from './pages/CategoryMovies';
// import { routhPath } from './constants/route';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider'
import { Main } from './pages/Main';

function App() {
  let clientId = '507262472563-jnmcgpmn8jpmlor1d8q68vutuptm87lm.apps.googleusercontent.com'

  return (
    <div className="App">
     {/* <Routes>
      <Route path={routhPath.home} element={<Home/>}/>
      <Route path={routhPath.categories} element={<CategoryMovies/>}/>
      <Route path={routhPath.invalid} element={<Home/>}/>
     </Routes> */}

     <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <Main/>
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
