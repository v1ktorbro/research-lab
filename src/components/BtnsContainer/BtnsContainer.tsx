import './BtnsContainer.scss';
import { bigButtons } from 'src/data/bigButtons';
import BigButton from '../BigButton/BigButton';

export default function BtnsContainer() {

  return (
    <article className='btns-container'>
      {bigButtons.map((btnData, index) => <BigButton dataBigButton={btnData} key={index} />)}
    </article>
  );
}