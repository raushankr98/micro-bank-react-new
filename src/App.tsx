import React from 'react';
import { connect } from 'react-redux';
import Loader from './core/component/loader';
import Navbar from './core/component/navbar/Navbar';
import Router from './router/Router';

function App(props: any) {

  return (
    <div>
      {/* <Alert/> */}
      {props.isLoading && < Loader />}
      {props.isAuth && <Navbar />}
      <Router />
    </div>
  );

}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading
  }
}

export default connect(mapStateToProps)(App);
