import React from 'react'
import { useContext } from 'react';
import {AccountContext} from './AccountProvider'
import { Home } from './Home';
import { Signin } from './Signin';

export const Main = () => {
    const { account } = useContext(AccountContext);

  return (
    <div>
        {/* {
            account ? 
            <Home/>
            :
            <Signin/>
        } */}
    </div>
  )
}
