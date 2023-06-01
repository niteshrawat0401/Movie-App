import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from './AccountProvider';

export const Signin = () => {
  const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
      let decoded = jwt_decode(res.credential);
      console.log(decoded);
      setAccount(decoded);
      // setShowloginButton(false);
      // setShowlogoutButton(true);
      // await addUser(decoded);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};
  return (
    <div>
      <GoogleLogin
  onSuccess={onLoginSuccess}
  onError={onLoginFailure}
/>
    </div>
  )
}
