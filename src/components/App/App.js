import './App.scss';
import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BtnsContainer from '../BtnsContainer/BtnsContainer';
import SignIn from '../SignIn/SignIn';
import { setLoginDataUser } from '../../store/authReducer';
import PageOfUser from '../PageOfUser/PageOfUser';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.isAuth);

  React.useEffect(() => {
    const stateRememberUserLastVisit = JSON.parse(localStorage.getItem('loginDataUser'));
    if (stateRememberUserLastVisit !== null && stateRememberUserLastVisit.isAuth === true) {
      navigate('/my-profile/');
      dispatch(setLoginDataUser({isAuth: stateRememberUserLastVisit.isAuth, email: stateRememberUserLastVisit.email}));
    }
  }, []);

  return (
    <>
    <main className='app'>
      <BtnsContainer />
      <Routes>
        <Route path='/' element={ authState ? 
            (<Navigate to="/my-profile/" />) : (<Navigate to="/sign-in/" />)
        } />
        <Route path='/sign-in/' element={<SignIn />} />
        <Route exact path='/my-profile/' element={<PageOfUser />}/>
      </Routes>
    </main>
    </>
  );
}

export default App;