import './BigButton.scss';
import React from 'react';
import { useSelector } from 'react-redux';

export default function BigButton({nameBtn}) {
  const authState = useSelector((state) => state.auth.isAuth);

  const handlerBtnClick = (evt) => {
    const { value } = evt.currentTarget;
    alert(`Кнопка ${value.toUpperCase()} почувствовала твой клик :)`);
  };

  return (
    <button onClick={handlerBtnClick} disabled={authState} value={nameBtn} id={nameBtn} className={`big-button big-button_${nameBtn}`}>
      <span className={`big-button-text big-button-text_${nameBtn}`} >{nameBtn.toUpperCase()}</span>
    </button>
  );
}