import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_API } from 'utils/url-api';
import styles from './page.module.css';

const API_SET_NEW_PASSWORD = URL_API + 'password-reset/reset';

type TEvent = React.ChangeEvent<HTMLInputElement>;

export const ResetPassword = () => {
  const [value, setValue] = useState({
    password: '',
    codeEmail: '',
  });
  const [icon, setIcon] = useState<'ShowIcon' | 'HideIcon'>('ShowIcon');
  const [typeInput, setTypeInput] = useState<'password' | 'text'>('password');

  const handleValueInput = ({ target }: TEvent) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleClick = () => {
    if (typeInput === 'password') {
      setIcon('HideIcon');
      setTypeInput('text');
    } else {
      setIcon('ShowIcon');
      setTypeInput('password');
    }
  };

  const handleResetPassword = async () => {
    const response = await fetch(API_SET_NEW_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: value,
      }),
    });
    if (response.ok) {
      let test = await response.json();
      console.log(test);
    }
  };

  return (
    <div className={styles.aligin_wrapper}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
      <div className='mb-6'>
        <Input
          type={typeInput}
          placeholder={'Введите новый пароль'}
          onChange={handleValueInput}
          value={value.password}
          name={'password'}
          error={false}
          onIconClick={handleClick}
          errorText={'Ошибка'}
          size={'default'}
          icon={icon}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={handleValueInput}
          value={value.codeEmail}
          name={'codeEmail'}
          error={false}
          onIconClick={() => false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className='mb-20'>
        <Button onClick={handleResetPassword} type='primary' size='medium'>
          Сохранить
        </Button>
      </div>
      <div className={`${styles.aligin_text} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Вспомнили пароль?
        </p>
        <Link to='/register'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </div>
  );
};
