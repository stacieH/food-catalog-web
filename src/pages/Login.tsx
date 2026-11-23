import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useUserLogin from '../customHook/useUserLogin';
import { UserContext } from '../components/MyContext';

import { Login as LoginWidget } from 'sh-login-widget';

import FacebookIcon from '../components/FacebookIcon';
import GoogleIcon from '../components/GoogleIcon';

function Login() {
  const { setLoginUser } = useContext(UserContext);
  const navigate = useNavigate(); //v5 -> useHistory()

  // custom hook
  // const [{ username, password }, setUser] = useUserLogin();

  const handleSubmit = async ({ email, password }) => {
    try {
      await setLoginUser({ username: email, password });
      await navigate('/');
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : String(err));
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-pass');
  };

  const signInWithGoogle = () => {};

  const signInWithFacebook = () => {};

  return (
    <React.Fragment>
      <LoginWidget
        text={{
          registerLink: 'Register now!',
        }}
        events={{
          onSubmit: handleSubmit,
          onForgotPassword: handleForgotPassword,
        }}
        social={[
          {
            id: 'google',
            icon: <FacebookIcon />,
            label: 'Sign in with Google',
            onClick: () => signInWithGoogle(),
          },
          {
            id: 'facebook',
            icon: <GoogleIcon />,
            label: 'Sign in with Facebook',
            onClick: () => signInWithFacebook(),
          },
        ]}
        // theme='dark'
        styles={{
          wrapper: {
            minHeight: 'calc(100dvh - 37px)',
          },
          forgotButton: {
            textTransform: 'capitalize',
          },
          submitButton: {
            backgroundColor: 'rgb(255, 111, 0)',
            //  color: "rgb(17, 17, 17)"
          },
        }}
      />
    </React.Fragment>
  );
}

export default Login;
