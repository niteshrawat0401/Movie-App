import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

export const Signin = () => {
  const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
      let decoded = jwt_decode(res.credential);
      console.log(decoded);
      setAccount(decoded);
      localStorage.setItem(('auth'),JSON.stringify(decoded))
      // setShowloginButton(false);
      // setShowlogoutButton(true);
      // await addUser(decoded);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};
  return (
    <div style={{width: '16.1%'  ,margin: 'auto', marginTop: '15rem'}}>
      <GoogleLogin
  onSuccess={onLoginSuccess}
  onError={onLoginFailure}
/>
    </div>
  )
}
