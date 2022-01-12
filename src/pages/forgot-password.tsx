import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './page.module.css';
import { URL_API } from 'utils/url-api';
import { useState } from 'react';

const API_RESET_PASSWORD = URL_API + 'password-reset';

export const ForgotPasswordPage = () => {
  const [value, setValue] = useState<string>('');
  const handleValueInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleForgotPassword = async () => {
    const response = await fetch(API_RESET_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: value,
      }),
    });
    if(response.ok){
      let test =  await response.json()
      console.log(test)
    }
  };
  return (
    <div className={styles.aligin_wrapper}>
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
    </div>
  );
};
