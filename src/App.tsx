import React from 'react';
import Alert from './core/component/alert';
import Navbar from './core/component/navbar/Navbar';
import Router from './router/Router';
import { useAppSelector } from './store/store';

function App() {
  const isAuth = useAppSelector(state => state.auth.isAuth);

  return (
    <div>
      {/* <Alert/> */}
      {isAuth && <Navbar />}
      <Router />
    </div>
  );
}

export default App;
