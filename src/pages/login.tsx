import { FC } from 'React';

import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FormEvent } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styles from './page.module.css';
import { useDispatch } from 'services/types';
import { useSelector } from 'services/types';
import { authorizationUser } from 'services/actions/user';
import { Wrapper } from 'components/wrapper';
import { Form } from 'components/form';
import { useInputValue } from 'utils/custom-hooks';

export const LoginPage: FC = () => {
  const { handleValueInput, value } = useInputValue({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { state } = useLocation<{ [key: string]: string } | undefined>();

  const { isAuth } = useSelector(store => store.user);

  const hendlerRequestLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authorizationUser(value));
  };
  if (isAuth) {
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <Wrapper className={styles.flex_column}>
      <p className='text text_type_main-medium mb-6'>Вход</p>
      <Form onSubmit={hendlerRequestLogin}>
        <div className='mb-6'>
          <Input
            type={'text'}
            placeholder={'E-mail'}
            onChange={handleValueInput}
            value={value.email}
            name={'email'}
            error={false}
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
          <Button type='primary' size='medium'>
            Войти
          </Button>
        </div>
      </Form>
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
    </Wrapper>
  );
};
