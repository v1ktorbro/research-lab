import './BigButton.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function BigButton({nameBtn, hexColor}) {
  const authState = useSelector((state) => state.auth.isAuth);
  return (
    <button disabled={authState ? false : true} id={nameBtn} className={`big-button big-button_${nameBtn}`} style={{backgroundColor: hexColor}}>
      <span className={`big-button-text big-button-text_${nameBtn}`} >{nameBtn.toUpperCase()}</span>
    </button>
  );
}

BigButton.propTypes = {
  nameBtn: PropTypes.string,
  hexColor: PropTypes.string,
};