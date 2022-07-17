import './App.scss';
import React from 'react';
import BtnsContainer from '../BtnsContainer/BtnsContainer';
import SignIn from '../SignIn/SignIn';

function App() {
  return (
    <>
    <main className='app'>
      <BtnsContainer />
      <div className='app__sign-in-block'>
        <p className='app__greeting-text'>Welcome to the ...</p>
        <SignIn />
      </div>
    </main>
    </>
  );
}

export default App;