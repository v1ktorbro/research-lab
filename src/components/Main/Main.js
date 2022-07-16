import './Main.scss';
import React from 'react';
import SignIn from '../SignIn/SignIn';
import BtnsContainer from '../BtnsContainer/BtnsContainer';

function Main() {
  return (
    <main className='main'>
      <BtnsContainer />
      <div className='main__sign-in-block'>
        <p className='main__greeting-text'>Welcome to the ...</p>
        <SignIn />
      </div>
    </main>
  );
}

export default Main;