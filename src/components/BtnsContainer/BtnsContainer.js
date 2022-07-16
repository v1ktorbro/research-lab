import './BtnsContainer.scss';
import React from 'react';
import BigButton from '../BigButton/BigButton';

export default function BtnsContainer() {
  return (
    <article className='btns-container'>
      <BigButton nameBtn='projects' hexColor='#414549' />
      <BigButton nameBtn='market' hexColor='#86BD24' />
      <BigButton nameBtn='user' hexColor='#0298A9' />
    </article>
  );
}