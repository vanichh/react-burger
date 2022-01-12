import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './page.module.css';
import { URL_API } from 'utils/url-api';

const authorization = URL_API + 'auth/login';

export const LoginPage = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const handleValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const test = async () => {
    const response = await fetch(authorization, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    });
    if (response.ok) {
      let test = await response.json();
      console.log(test);
      localStorage.setItem('refreshToken', test.refreshToken);
      localStorage.setItem('accessToken', test.accessToken);
    }
  };

  return (
    <div className={styles.aligin_wrapper}>
      <p className='text text_type_main-medium mb-6'>Вход</p>
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
        <Button onClick={test} type='primary' size='medium'>
          Войти
        </Button>
      </div>
      <div className={`${styles.aligin_text} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Вы - новый пользователь?
        </p>
        <Link to='/register'>
          <p className='text text_type_main-default'>Зарегистрироваться</p>
        </Link>
      </div>
      <div className={styles.aligin_text}>
        <p className='text text_type_main-default text_color_inactive mr-4'>
          Забыли пароль?
        </p>
        <Link to='/forgot-password'>
          <p className='text text_type_main-default'>Восстановить пароль</p>
        </Link>
      </div>
    </div>
  );
};
