import styles from './page.module.css';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_API } from 'utils/url-api';

const API_REGISTER_USER = URL_API + 'auth/register';

type TEvent = React.ChangeEvent<HTMLInputElement>;

export const RegisterPage = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleValueInput = ({ target }: TEvent) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleRegisterUser = async () => {
    const response = await fetch(API_REGISTER_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
        name: value.name,
      }),
    });
    if(response.ok){
      const res = await response.json();
      console.log(res)
    }
  };

  return (
    <div className={styles.aligin_wrapper}>
      <p className='text text_type_main-medium mb-6'>Регистрация</p>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleValueInput}
          value={value.name}
          name={'name'}
          error={false}
          onIconClick={() => false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className='mb-6'>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={handleValueInput}
          value={value.email}
          name={'email'}
          error={false}
          onIconClick={() => false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className='mb-6'>
        <PasswordInput
          onChange={handleValueInput}
          value={value.password}
          name={'password'}
        />
      </div>
      <div className='mb-20'>
        <Button onClick={handleRegisterUser} type='primary' size='medium'>
          Зарегистрироваться
        </Button>
      </div>
      <div className={styles.aligin_text}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Уже зарегистрированы?
        </p>
        <Link to='/login'>
          <p className='text text_type_main-default'>Войти</p>
        </Link>
      </div>
    </div>
  );
};