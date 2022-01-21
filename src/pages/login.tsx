import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { FormEvent, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import styles from './page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authorizationUser } from 'services/actions/user';
import { RootState } from 'services/store';
import { Wrapper } from 'components/wrapper';
import { Form } from 'components/form';

type TEvent = React.ChangeEvent<HTMLInputElement>;

export const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector((store: RootState) => store.user);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const handleValueInput = ({ target }: TEvent) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const hendlerRequestLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authorizationUser(value));
  };

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    );
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
