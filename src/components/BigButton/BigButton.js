import './BigButton.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function BigButton({nameBtn, hexColor}) {
  return (
    <button id={nameBtn} className={`bit-button bit-button_${nameBtn}`} style={{backgroundColor: hexColor}}>
      <span className={`bit-button-text bit-button-text_${nameBtn}`} >{nameBtn.toUpperCase()}</span>
    </button>
  );
}

BigButton.propTypes = {
  nameBtn: PropTypes.string,
  hexColor: PropTypes.string,
};