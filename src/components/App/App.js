import './App.scss';
import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BtnsContainer from '../BtnsContainer/BtnsContainer';
import SignIn from '../SignIn/SignIn';
import { toggleAuthState } from '../../store/authReducer';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.isAuth);

  React.useEffect(() => {
    const stateRememberUserLastVisit = localStorage.getItem('stateRememberUser');
    if (stateRememberUserLastVisit) {
      navigate('/my-profile/');
      dispatch(toggleAuthState({isAuth: stateRememberUserLastVisit, email: 're@ya.ru'}));
    }
  }, []);

  return (
    <>
    <main className='app'>
      <BtnsContainer />
      <Routes>
        <Route exact path='/' element={
          authState ? (<Navigate to="/my-profile/" />) : (<Navigate to="/sign-in/" />)
        } />

        <Route path='/sign-in/' element={
          <>
            <div className='app__sign-in-block'>
              <p className='app__greeting-text'>Welcome to the ...</p>
              <SignIn />
            </div>
          </>
        }/>

        <Route path='/my-profile/' element={
          <>
          <h1>Ну типо работает?</h1>
          </>
        }/>
      </Routes>
    </main>
    </>
  );
}

export default App;