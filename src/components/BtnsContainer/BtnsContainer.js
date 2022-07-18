import './BtnsContainer.scss';
import React from 'react';
import BigButton from '../BigButton/BigButton';

export default function BtnsContainer() {
  return (
    <article className='btns-container'>
      <BigButton nameBtn='projects' />
      <BigButton nameBtn='market' />
      <BigButton nameBtn='user' />
    </article>
  );
}