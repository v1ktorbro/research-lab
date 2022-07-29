import './BigButton.scss';
import { useSelector } from 'react-redux';
import { IBigButton } from '../../models/IBigButton'

interface PropsBigButton {
  dataBigButton: IBigButton,
}

export default function BigButton({ dataBigButton }: PropsBigButton) {
  const authState = useSelector((state) => state.auth.isAuth);
  
  const handlerBtnClick = (evt) => {
    const { value } = evt.currentTarget;
    alert(`Кнопка ${value.toUpperCase()} почувствовала твой клик :)`);
  };  

  return (
    <button onClick={handlerBtnClick} disabled={authState ? false : true} value={dataBigButton.name}  className={`big-button big-button_${dataBigButton.name}`}>
      <span className={`big-button-text big-button-text_${dataBigButton.name}`} >{dataBigButton.name}</span>
    </button>
  );
}