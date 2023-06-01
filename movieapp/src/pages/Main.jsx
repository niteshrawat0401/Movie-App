import React from 'react'
import { useContext } from 'react';
import { Signin } from './Signin';
import {Routes, Route} from 'react-router-dom'
import { Home } from './Home';
import { CategoryMovies } from './CategoryMovies';
import { routhPath } from '../constants/route';
import {AccountContext} from '../context/AccountProvider'

export const Main = () => {
    const { account } = useContext(AccountContext);

  return (
    <div>
        {
            account ? 
    <Routes>
        <Route path={routhPath.home} element={<Home/>}/>
        <Route path={routhPath.categories} element={<CategoryMovies/>}/>
        <Route path={routhPath.invalid} element={<Home/>}/>
    </Routes>
            :
            <Signin/>
        }
    </div>
  )
}
