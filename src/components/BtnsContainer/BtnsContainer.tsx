import './BtnsContainer.scss';
import { bigButtonsData } from 'src/data/bigButtonsData';
import BigButton from '../BigButton/BigButton';

export default function BtnsContainer() {

  return (
    <article className='btns-container'>
      {bigButtonsData.map((btnData, index) => <BigButton dataBigButton={btnData} key={index} />)}
    </article>
  );
}