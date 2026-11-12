import React, { Fragment, Suspense, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// React Redux: Hook
// import {Provider, createStoreHook} from 'react-redux'

import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import RouterLists from './RouterLists';

// React Hook: Context
import { UserContext } from './components/MyContext';
const Provider = UserContext.Provider;

import './styles/index.css';

import Loading from './components/Loading';
import type { UserContextType } from './components/MyContext';

function App() {
  const [loginUser, setLoginUser] = useState<UserContextType['loginUser']>({
    username: null,
    password: null,
  });

  const handleSetLoginUser = (user: UserContextType['loginUser']) => {
    setLoginUser(user);
  };

  const value = useMemo(
    () => ({ loginUser, setLoginUser: handleSetLoginUser }),
    [loginUser],
  );

  return (
    <Fragment>
      <Provider value={value}>
        <BrowserRouter>
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <RouterLists />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
