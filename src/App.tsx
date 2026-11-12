import React, {
  Fragment,
  Suspense,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
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
import { getS3Images } from './utils/s3API';

function App() {
  const [images, setImages] = useState<Record<string, string | undefined>>({});
  const [loginUser, setLoginUser] = useState<UserContextType['loginUser']>({
    username: null,
    password: null,
  });

  const handleSetLoginUser = (user: UserContextType['loginUser']) => {
    setLoginUser(user);
  };

  const getImages = useCallback(async () => {
    const data = await getS3Images();

    setImages(data);
  }, []);

  const value = useMemo(
    () => ({ loginUser, setLoginUser: handleSetLoginUser, images }),
    [loginUser, images],
  );

  useEffect(() => {
    getImages();
  }, [getImages]);

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
