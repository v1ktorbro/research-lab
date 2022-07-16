import './BigButton.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function BigButton({nameBtn, hexColor}) {
  return (
    <button disabled id={nameBtn} className={`big-button big-button_${nameBtn}`} style={{backgroundColor: hexColor}}>
      <span className={`big-button-text big-button-text_${nameBtn}`} >{nameBtn.toUpperCase()}</span>
    </button>
  );
}

BigButton.propTypes = {
  nameBtn: PropTypes.string,
  hexColor: PropTypes.string,
};