/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory } from 'react-router-dom';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from 'services/actions/user';
import { RootState } from 'services/store';
import { Wrapper } from 'components/wrapper/wrapper';

export const ForgotPasswordPage = () => {
  const history = useHistory();
  const { passwordReset } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const handleValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleForgotPassword = () => {
    dispatch(resetPassword(value));
  };

  useEffect(() => {
    if (passwordReset) {
      history.replace({ pathname: '/reset-password' });
    }
  }, [passwordReset]);

  return (
    <Wrapper>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Укажите e-mail'}
          onChange={handleValueInput}
          value={value}
          name={'email'}
          error={false}
          onIconClick={() => false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className='mb-20'>
        <Button onClick={handleForgotPassword} type='primary' size='medium'>
          Восстановить
        </Button>
      </div>
      <div className={`${styles.aligin_text} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Вспомнили пароль?
        </p>
        <Link to='/login'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </Wrapper>
  );
};
