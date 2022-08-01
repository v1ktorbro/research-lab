import './PageOfUser.scss';
// import defaultAvatar from '../../images/default_avatar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDataUser } from '../../store/authReducer';

export default function PageOfUser() {
  // const defaultAvatar = '../../images/default_avatar.svg';
  // const defaultLogo = require('../../images/default_avatar.svg');
  // const defaultLogo = require('../../images/default_avatar.svg');
  // const currentEmailUser = useSelector((state) => state.auth.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerBtnLogout = () => {
      dispatch(setLoginDataUser({email: '', isAuth: false}));
      navigate('/');
      localStorage.removeItem('loginDataUser');
  };

  return (
    <article className='page-of-user'>
      <p className='page-of-user__greeting-text'>Welcome to the finished test task from Viktor Abrosimov</p>
      <div className='page-of-user__block-info'>
        {/* <span className='page-of-user__avatar' src={defaultAvatar} alt='avatar' /> */}
        {/* <h4 className='page-of-user__email'>{currentEmailUser}</h4> */}
        <button onClick={handlerBtnLogout} className='page-of-user__btn-logout'>Logout</button>
      </div>
    </article>
  );
}